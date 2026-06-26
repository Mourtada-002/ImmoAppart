gsap.registerPlugin(ScrollTrigger);

// ─── CINEMATIC ENTRANCE ───────────────────────────────────
const curtainTl = gsap.timeline();

// Rideau qui s'ouvre
curtainTl
  .to('.curtain-top', {
    y: '-100%',
    duration: 1.2,
    ease: 'power4.inOut'
  })
  .to('.curtain-bottom', {
    y: '100%',
    duration: 1.2,
    ease: 'power4.inOut'
  }, '<')

// Nav slide down
  .from('nav', {
    y: -80,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')

// Image droite — glisse depuis la droite avec clip-path
  .fromTo('.hero-right', {
    x: 120,
    opacity: 0,
    clipPath: 'inset(0 100% 0 0)'
  }, {
    x: 0,
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    duration: 1.3,
    ease: 'power4.out'
  }, '-=0.6')

// Eyebrow
  .from('.hero-eyebrow', {
    x: -60,
    opacity: 0,
    duration: 0.7,
    ease: 'power3.out'
  }, '-=0.9')

// Titre ligne par ligne
  .from('.hero-title', {
    x: -80,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  }, '-=0.6')

// Sous-titre
  .from('.hero-subtitle', {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')

// Boutons
  .from('.hero-actions .btn-primary', {
    x: -40,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.hero-actions .btn-secondary', {
    x: -40,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.4')

// Badge prix — pop avec rotation
  .fromTo('.hero-badge', {
    opacity: 0,
    scale: 0.6,
    rotation: -8
  }, {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 0.8,
    ease: 'back.out(2)'
  }, '-=0.3')

// Stats — cascade avec flash gold
  .from('.hero-stats', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power3.out'
  }, '-=0.2')
  .from('.stat-item', {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.15,
    ease: 'power3.out',
    onComplete: () => {
      document.querySelectorAll('.stat-number').forEach((el, i) => {
        setTimeout(() => {
          gsap.fromTo(el, 
            { color: 'var(--gold)' },
            { color: 'var(--charcoal)', duration: 0.8, ease: 'power2.out' }
          );
        }, i * 150);
      });
    }
  }, '-=0.2');

// ─── COMPTEUR STATS ───────────────────────────────────────
document.querySelectorAll('.stat-number').forEach(el => {
  const raw = el.textContent.trim();
  const num = parseInt(raw.replace(/\D/g, ''));
  const suffix = raw.replace(/[0-9]/g, '');
  const obj = { val: 0 };

  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(obj, {
        val: num,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + suffix;
        }
      });
    }
  });
});

// ─── SERVICES ─────────────────────────────────────────────
gsap.from('#services .section-eyebrow, #services .section-title, #services .section-desc', {
  scrollTrigger: { trigger: '#services', start: 'top 75%' },
  opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out'
});

gsap.from('.service-card', {
  scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
  opacity: 0, y: 50, duration: 0.7, stagger: 0.12, ease: 'power3.out'
});

gsap.from('.services-image', {
  scrollTrigger: { trigger: '.services-image', start: 'top 80%' },
  opacity: 0, x: 60, duration: 1, ease: 'power3.out'
});

gsap.from('.services-image-badge', {
  scrollTrigger: { trigger: '.services-image', start: 'top 70%' },
  opacity: 0, scale: 0.8, duration: 0.7, ease: 'back.out(1.7)'
});

// ─── BIENS ────────────────────────────────────────────────
gsap.from('.properties-header > *', {
  scrollTrigger: { trigger: '#biens', start: 'top 75%' },
  opacity: 0, y: 30, duration: 0.7, stagger: 0.15, ease: 'power3.out'
});

gsap.from('.property-card', {
  scrollTrigger: { trigger: '.properties-grid', start: 'top 80%' },
  opacity: 0, y: 60, duration: 0.8, stagger: 0.18, ease: 'power3.out'
});

// ─── PROCESS ──────────────────────────────────────────────
gsap.from('#process .section-title, #process .section-desc', {
  scrollTrigger: { trigger: '#process', start: 'top 75%' },
  opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out'
});

gsap.from('.step', {
  scrollTrigger: { trigger: '.steps', start: 'top 80%' },
  opacity: 0, y: 50, duration: 0.7, stagger: 0.15, ease: 'power3.out'
});

gsap.from('.step-num', {
  scrollTrigger: { trigger: '.steps', start: 'top 75%' },
  opacity: 0, scale: 0.5, duration: 0.6, stagger: 0.15, ease: 'back.out(1.4)'
});

// ─── TÉMOIGNAGES ──────────────────────────────────────────
gsap.from('#temoignages .section-eyebrow, #temoignages .section-title', {
  scrollTrigger: { trigger: '#temoignages', start: 'top 75%' },
  opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.out'
});

gsap.from('.testimonial-card', {
  scrollTrigger: { trigger: '.testimonials-grid', start: 'top 80%' },
  opacity: 0, y: 50, duration: 0.8, stagger: 0.2, ease: 'power3.out'
});

// ─── CONTACT ──────────────────────────────────────────────
gsap.from('#contact .section-eyebrow, #contact .section-title', {
  scrollTrigger: { trigger: '#contact', start: 'top 75%' },
  opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.out'
});

gsap.from('.contact-info', {
  scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
  opacity: 0, x: -50, duration: 0.9, ease: 'power3.out'
});

gsap.from('.contact-form-wrapper', {
  scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
  opacity: 0, x: 50, duration: 0.9, ease: 'power3.out'
});

// ─── FORMULAIRE CONTACT ───────────────────────────────────
const form = document.querySelector('.contact-form-wrapper');
const submitBtn = document.getElementById('contactPayBtn');

submitBtn.addEventListener('click', () => {
  const prenom = form.querySelector('input[placeholder="Maryline"]');
  const nom = form.querySelector('input[placeholder="Kouamé"]');
  const email = form.querySelector('input[type="email"]');
  const tel = form.querySelector('input[type="tel"]');
  const type = form.querySelector('.form-select');
  const message = form.querySelector('.form-textarea');

  const champs = [prenom, nom, email, tel, type, message];
  let valide = true;

  champs.forEach(c => { c.style.borderColor = ''; });
  const oldError = form.querySelector('.form-error-msg');
  if (oldError) oldError.remove();
  const oldSuccess = form.querySelector('.form-success-msg');
  if (oldSuccess) oldSuccess.remove();

  champs.forEach(c => {
    if (!c.value.trim()) { c.style.borderColor = '#C0392B'; valide = false; }
  });

  if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.style.borderColor = '#C0392B'; valide = false;
  }

  if (!valide) {
    const err = document.createElement('p');
    err.className = 'form-error-msg';
    err.textContent = 'Veuillez remplir tous les champs correctement.';
    err.style.cssText = 'color:#C0392B;font-size:13px;margin-top:12px;text-align:center;';
    submitBtn.after(err);
    return;
  }

  submitBtn.textContent = 'Envoi en cours...';
  submitBtn.disabled = true;

  setTimeout(() => {
    champs.forEach(c => { c.value = ''; c.style.borderColor = ''; });
    const ok = document.createElement('p');
    ok.className = 'form-success-msg';
    ok.textContent = '✓ Votre demande a bien été envoyée. Nous vous répondrons sous 24h.';
    ok.style.cssText = 'color:#2E7D52;font-size:13px;margin-top:12px;text-align:center;font-weight:500;';
    submitBtn.after(ok);
    submitBtn.textContent = 'Envoyer la demande';
    submitBtn.disabled = false;
    setTimeout(() => ok.remove(), 5000);
  }, 1200);
});

// ─── BURGER MENU ──────────────────────────────────────────
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

const menuTl = gsap.timeline({ paused: true });
menuTl
  .to('.mobile-menu', { opacity: 1, duration: 0.4, ease: 'power3.out' })
  .from('.mobile-link', {
    opacity: 0, y: 40, duration: 0.5,
    stagger: 0.08, ease: 'power3.out'
  }, '-=0.2');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  if (mobileMenu.classList.contains('open')) {
    menuTl.play();
  } else {
    menuTl.reverse();
  }
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    menuTl.reverse();
  });
});