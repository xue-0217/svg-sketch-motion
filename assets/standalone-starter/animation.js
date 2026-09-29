(() => {
  const svg = document.querySelector('#sketch');
  const actor = document.querySelector('#actor');
  const body = document.querySelector('#actor-body');
  const pen = document.querySelector('#pen');
  const hitArea = document.querySelector('#hit-area');
  const replayButton = document.querySelector('#replay');
  const pauseButton = document.querySelector('#pause');
  const legFront = document.querySelector('#leg-front');
  const legBack = document.querySelector('#leg-back');
  const armFront = document.querySelector('#arm-front');
  const armBack = document.querySelector('#arm-back');
  const drawPaths = [...svg.querySelectorAll('.js-draw')];
  const lengths = drawPaths.map(path => path.getTotalLength());
  const totalLength = lengths.reduce((sum, length) => sum + length, 0);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const state = {
    elapsed: 0,
    last: 0,
    raf: 0,
    paused: false,
    visible: true,
    waveAt: -10,
  };

  const clamp01 = value => Math.max(0, Math.min(1, value));
  const smooth = value => value * value * (3 - 2 * value);

  drawPaths.forEach((path, index) => {
    path.style.strokeDasharray = `${lengths[index]} ${lengths[index]}`;
    path.style.strokeDashoffset = String(lengths[index]);
  });

  function paint(instant = false) {
    const drawProgress = instant ? 1 : smooth(clamp01(state.elapsed / 5.2));
    let remaining = drawProgress * totalLength;
    let activeIndex = -1;

    drawPaths.forEach((path, index) => {
      const drawn = Math.max(0, Math.min(lengths[index], remaining));
      path.style.strokeDashoffset = String(lengths[index] - drawn);
      if (drawn > 0 && drawn < lengths[index]) activeIndex = index;
      remaining -= lengths[index];
    });

    if (!instant && activeIndex >= 0) {
      const activePath = drawPaths[activeIndex];
      const drawn = lengths[activeIndex] - Number.parseFloat(activePath.style.strokeDashoffset);
      const point = activePath.getPointAtLength(drawn);
      pen.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(8)`);
      pen.style.opacity = '1';
    } else {
      pen.style.opacity = '0';
    }

    const travel = (state.elapsed * 0.075) % 2;
    const forward = travel <= 1;
    const walkProgress = instant ? 0.5 : forward ? travel : 2 - travel;
    const facing = instant || forward ? 1 : -1;
    const actorX = 320 + walkProgress * 560;
    const phase = state.elapsed * 9;
    const step = instant ? 0 : Math.sin(phase);
    const bob = instant ? 0 : Math.abs(step) * 3;
    const waveTime = state.elapsed - state.waveAt;
    const waving = !instant && waveTime > 0 && waveTime < 1.15;
    const waveAngle = waving ? -95 + Math.sin(waveTime * 18) * 18 : 0;

    actor.setAttribute('transform', `translate(${actorX} ${386 - bob}) scale(${facing} 1)`);
    body.setAttribute('transform', `rotate(${step * 2})`);
    legFront.setAttribute('d', `M7 17 L${12 + step * 8} 35 L${23 + step * 5} 35`);
    legBack.setAttribute('d', `M-7 17 L${-11 - step * 8} 35 L${-22 - step * 5} 35`);
    armBack.setAttribute('d', `M-12-8 L${-25 + step * 4} ${8 - step * 5}`);
    armFront.setAttribute('transform', waving ? `rotate(${waveAngle} 12 -8)` : '');
    armFront.setAttribute('d', `M12-8 L${25 - step * 4} ${8 + step * 5}`);
  }

  function tick(now) {
    state.raf = 0;
    if (state.paused || !state.visible || document.hidden || reducedMotion.matches) return;
    const dt = state.last ? Math.min((now - state.last) / 1000, 0.05) : 0;
    state.last = now;
    state.elapsed += dt;
    paint();
    state.raf = requestAnimationFrame(tick);
  }

  function schedule() {
    cancelAnimationFrame(state.raf);
    state.raf = 0;
    state.last = 0;
    if (!state.paused && state.visible && !document.hidden && !reducedMotion.matches) {
      state.raf = requestAnimationFrame(tick);
    }
  }

  function renderMotionPreference() {
    paint(reducedMotion.matches);
    schedule();
  }

  function wave() {
    if (!state.paused && state.elapsed - state.waveAt > 1.25) state.waveAt = state.elapsed;
  }

  function replay() {
    state.elapsed = 0;
    state.waveAt = -10;
    state.paused = false;
    pauseButton.textContent = '暂停';
    pauseButton.setAttribute('aria-pressed', 'false');
    paint();
    schedule();
  }

  function togglePause() {
    state.paused = !state.paused;
    pauseButton.textContent = state.paused ? '继续' : '暂停';
    pauseButton.setAttribute('aria-pressed', String(state.paused));
    schedule();
  }

  const observer = new IntersectionObserver(([entry]) => {
    state.visible = entry.isIntersecting;
    schedule();
  });

  observer.observe(svg);
  hitArea.addEventListener('click', wave);
  hitArea.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      wave();
    }
  });
  replayButton.addEventListener('click', replay);
  pauseButton.addEventListener('click', togglePause);
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', renderMotionPreference);
  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(state.raf);
    observer.disconnect();
  }, { once: true });

  renderMotionPreference();
})();
