/* ============================================================
   NUESTRA GALAXIA DE AMOR 💫 | JOSE & TAMY • 3 MESES
   Script Principal Interactivo (Three.js 3D + Fallback 2D Seguro)
   ============================================================ */

/* ============================================================
   1. CONFIGURACIÓN Y CONTENIDO PERSONALIZADO
   ============================================================ */
const CONFIG = {
  girlfriendName: "Tamy",
  yourName: "Jose",

  // Fecha de inicio: 27 de Julio de 2026 (hace 3 meses / 92 días)
  startDate: new Date(2026, 6, 27, 0, 0, 0),

  // 9 Planetas de Recuerdos con las fotos especiales
  photos: [
    { 
      url: '0.png', 
      title: 'Donde Todo Empezó (27 de Julio) ❤️', 
      desc: 'Aquel inolvidable 27 de Julio comenzó nuestra historia. Hoy cumplimos 3 meses del momento exacto en que mi vida cambió para siempre a tu lado, mi Tamy.' 
    },
    { 
      url: '1.png', 
      title: 'Tu Mirada que Ilumina Mi Cielo ✨', 
      desc: 'En tus hermosos ojos veo constelaciones enteras. Cada vez que me miras siento esa paz infinita que solo tú sabes transmitirme, mi niña.' 
    },
    { 
      url: '2.png', 
      title: 'Caminando Juntos en la Misma Órbita 💫', 
      desc: '92 días descubriendo que caminar de tu mano hace que cualquier camino sea el destino perfecto. No hay lugar en el mundo donde prefiera estar.' 
    },
    { 
      url: '3.png', 
      title: 'Risas, Complicidad y Bromas Cósmicas 💕', 
      desc: 'Tres meses de risas espontáneas, chistes que solo nosotros entendemos y esa conexión única entre Jose y Tamy que no para de crecer día a día.' 
    },
    { 
      url: '4.png', 
      title: 'Mi Gravedad y Mi Lugar Seguro 🌹', 
      desc: 'En un universo tan grande y caótico, tus abrazos son mi centro de gravedad. Estar entre tus brazos es sentir que estoy en casa.' 
    },
    { 
      url: '5.png', 
      title: '3 Meses Inolvidables 🌌', 
      desc: 'Tres meses completos haciéndome el hombre más feliz, afortunado y pleno de todo el planeta. Gracias por cada segundo juntos.' 
    },
    { 
      url: '6.png', 
      title: 'Amor que se Expande Cada Día 💖', 
      desc: 'Como el universo en constante expansión, mi amor por ti no tiene límites ni final. Cada amanecer te amo más que ayer.' 
    },
    { 
      url: '7.png', 
      title: 'Nuestra Gran Historia Cósmica 🚀', 
      desc: 'Eres mi presente favorito y todo lo hermoso que sueño construir en mi futuro contigo. Juntos hasta el confín del universo.' 
    },
    { 
      url: '8.png', 
      title: 'Jose & Tamy: Amor Eterno 🪐', 
      desc: 'Hoy celebramos 3 meses, el comienzo de toda una vida juntos. Eres y serás siempre mi estrella favorita en todo el cosmos.' 
    }
  ],

  // 90 Razones Cósmicas para Amarte (¡Una por cada día de estos 3 meses!)
  reasons: [
    "Por tu hermosa sonrisa que tiene la fuerza gravitacional de alegrar todo mi día.",
    "Por la dulzura infinita y la ternura con la que me miras.",
    "Por cada risa compartida hasta que nos duele el estómago.",
    "Por tus abrazos que me hacen sentir que todo estará bien.",
    "Por ser una mujer increíble, bondadosa, inteligente y de gran corazón.",
    "Por cómo tomas mi mano y me haces sentir el hombre más afortunado del universo.",
    "Por tus mensajes de buenos días que son mi primer pensamiento feliz.",
    "Por escucharme, apoyarme y creer en mí incondicionalmente.",
    "Por la paz inmensa que siento cada vez que estoy cerca de ti.",
    "Por el brillo tan especial de tus ojitos cuando estás contenta.",
    "Por tus ocurrencias tan divertidas y tu sentido del humor único.",
    "Por hacer de los momentos más sencillos recuerdos inolvidables.",
    "Por motivarme a ser una mejor versión de mí mismo cada día.",
    "Por el tono cálido de tu voz que me calma cualquier ansiedad.",
    "Por cada caricia y detalle con el que demuestras tu amor sincero.",
    "Por ser mi novia, mi mejor amiga, mi confidente y mi cómplice.",
    "Por cómo encajas a la perfección en mi vida y en mi corazón.",
    "Por soñar despierta a mi lado y planear nuestro futuro juntos.",
    "Por tu paciencia, tu ternura y tu forma tan linda de cuidarme.",
    "Por las pláticas interminables donde el tiempo pasa volando.",
    "Por hacerme sentir querido, respetado y valorado en cada instante.",
    "Por enseñarme lo hermoso y sano que es el amor verdadero.",
    "Por haber coincidido conmigo en este universo tan inmenso.",
    "Por ser simplemente tú: auténtica, transparente y hermosa.",
    "Por estos 3 meses a tu lado que han sido los más felices de mi vida.",
    "Por la forma en que te preocupas por mí y estás atenta a cada detalle.",
    "Por tu alegría contagiosa que llena de luz cualquier habitación.",
    "Por cómo bailas o cantas cuando estás de buen humor.",
    "Por tus besos que aceleran mi corazón como el primer día.",
    "Por la confianza tan bonita y sólida que hemos construido juntos.",
    "Por entender mis silencios y alegrar mis días grises.",
    "Por ser mi refugio favorito después de un día cansado.",
    "Por emocionarte con las pequeñas cosas de la vida.",
    "Por tus abrazos por la espalda que me llenan el alma.",
    "Por la forma en que pronuncias mi nombre.",
    "Por tu dedicación y esfuerzo en todo lo que te propones.",
    "Por tu valentía para afrontar los retos cotidianos.",
    "Por cada broma interna que solo nosotros dos entendemos.",
    "Por cómo me miras cuando crees que no me doy cuenta.",
    "Por la complicidad que tenemos con solo mirarnos a los ojos.",
    "Por ser mi hogar en cualquier lugar del mundo.",
    "Por respetar mis espacios y hacerme sentir libre a tu lado.",
    "Por tus 'te amo' espontáneos que me alegran la existencia.",
    "Por la sinceridad y transparencia de tus sentimientos.",
    "Por tu aroma que se queda grabado en mi memoria.",
    "Por cómo defiendes lo que quieres y amas con pasión.",
    "Por enseñarme a ver la vida con ojos más optimistas.",
    "Por ser mi compañera incondicional de aventuras.",
    "Por cada fotografía que guarda un pedazo de nuestra felicidad.",
    "Por soñar con viajar por el mundo tomados de la mano.",
    "Por tu capacidad de perdonar y construir siempre hacia adelante.",
    "Por inspirarme a escribirte cosas lindas desde el corazón.",
    "Por ser la dueña indiscutible de mis pensamientos diarios.",
    "Por cómo me apoyas en mis proyectos y metas personales.",
    "Por ser dulce conmigo incluso cuando estás cansada.",
    "Por cada noche que nos despedimos deseándonos lo mejor.",
    "Por las miradas cómplices que nos damos en cualquier lugar.",
    "Por la forma en que me haces reír cuando más lo necesito.",
    "Por tu sencillez y la nobleza de tu alma.",
    "Por cómo te iluminas cuando hablas de lo que te apasiona.",
    "Por ser el motivo de mis suspiros más profundos.",
    "Por hacer que el tiempo a tu lado vuele y a la vez sea eterno.",
    "Por tus besos tiernos en la mejilla y en la frente.",
    "Por enseñarme que amar bonito sí es posible.",
    "Por tu lealtad inquebrantable y tu cariño sincero.",
    "Por hacerme sentir seguro de nosotros y de nuestro futuro.",
    "Por compartir tus miedos y alegrías conmigo sin reservas.",
    "Por cómo me tomas del brazo al caminar por la calle.",
    "Por ser mi lugar favorito en todo el universo.",
    "Por el amor con el que me abrazas tan fuerte.",
    "Por tus consejos sabios cuando tengo dudas.",
    "Por ser la primera persona a la que quiero contarle todo.",
    "Por tu sonrisa tímida que me vuelve a enamorar cada vez.",
    "Por la serenidad que me transmites con solo estar a mi lado.",
    "Por cada segundo de estos 92 días que atesoro en mi corazón.",
    "Por soñar con envejecer juntos y celebrar mil aniversarios.",
    "Por ser mi mayor bendición y mi regalo más bonito.",
    "Por cómo me miras con tanto cariño en cada despedida.",
    "Por tu creatividad y tus detalles tan especiales.",
    "Por iluminar mis noches como la luna más brillante.",
    "Por ser mi persona vitamina en los días difíciles.",
    "Por el calor de tus manos entre las mías.",
    "Por enseñarme lo que significa un amor sano y correspondido.",
    "Por ser mi orgullo y la mujer que más admiro.",
    "Por cada promesa cumplida y las que aún nos faltan cumplir.",
    "Por hacerme sentir el hombre más amado de la tierra.",
    "Por todo lo que hemos superado juntos con amor y respeto.",
    "Por elegirme todos los días como tu compañero de vida.",
    "Por ser mi presente, mi futuro y mi estrella guía.",
    "Por ser tú, mi Tamy amada, ¡y por nuestros 3 meses de amor infinito! ❤️"
  ]
};

/* ============================================================
   2. MOTOR GRÁFICO THREE.JS - UNIVERSO 3D
   ============================================================ */
let scene, camera, renderer;
let sunMesh, sunCorona, galaxyParticles, shootingStars = [];
let planetMeshes = [];
let constellationGroup;
let isInteracting = false;
let autoRotate = true;
let isThreeReady = false;

// Helpers de Adaptabilidad Móvil vs PC
function isMobileDevice() {
  return window.innerWidth < 768 || (window.innerWidth / window.innerHeight) < 1.0;
}

function getResponsiveCameraRadius() {
  const aspect = window.innerWidth / window.innerHeight;
  if (aspect < 0.6) return 135; // Móviles en vertical (iPhone, Android)
  if (aspect < 1.0) return 110; // Tablets o pantallas cuadradas
  return 80;                   // PC / Escritorio en horizontal
}

function getResponsiveFov() {
  const aspect = window.innerWidth / window.innerHeight;
  if (aspect < 0.6) return 65; // FOV más amplio en vertical para que no se recorte la galaxia
  if (aspect < 1.0) return 60;
  return 55;
}

// Coordenadas esféricas de la cámara (Control orbital personalizado)
const initialRadius = getResponsiveCameraRadius();
let spherical = {
  radius: initialRadius,
  theta: 0.5,
  phi: 1.2,
  targetRadius: initialRadius,
  targetTheta: 0.5,
  targetPhi: 1.2
};
let cameraTarget = new THREE.Vector3(0, 0, 0);
let targetLookAt = new THREE.Vector3(0, 0, 0);

// Puntero / Touch
let pointer = {
  x: 0,
  y: 0,
  prevX: 0,
  prevY: 0,
  isDown: false,
  hasMoved: false,
  downTime: 0
};
let touchDistance = 0;
let raycaster, mouseNorm;

// Configuración de los 9 planetas
const PLANET_CONFIG = [
  { dist: 22, size: 2.1, speed: 0.009, color: 0xffa07a, ring: false, name: "Recuerdo #1: Donde Todo Empezó" },
  { dist: 28, size: 2.3, speed: 0.0075, color: 0xffd166, ring: true, name: "Recuerdo #2: Tu Mirada Mágica" },
  { dist: 35, size: 2.5, speed: 0.006, color: 0x4cc9f0, ring: false, name: "Recuerdo #3: Caminando Juntos" },
  { dist: 42, size: 2.2, speed: 0.005, color: 0xff758f, ring: true, name: "Recuerdo #4: Risas & Complicidad" },
  { dist: 50, size: 3.2, speed: 0.004, color: 0xc77dff, ring: true, name: "Recuerdo #5: Mi Lugar Seguro" },
  { dist: 58, size: 2.8, speed: 0.0032, color: 0x70d6ff, ring: true, name: "Recuerdo #6: 3 Meses Inolvidables" },
  { dist: 66, size: 2.4, speed: 0.0026, color: 0xf72585, ring: false, name: "Recuerdo #7: Amor que se Expande" },
  { dist: 74, size: 2.3, speed: 0.0021, color: 0x72efdd, ring: true, name: "Recuerdo #8: Nuestra Historia" },
  { dist: 82, size: 2.0, speed: 0.0016, color: 0xffb703, ring: false, name: "Recuerdo #9: Jose & Tamy Por Siempre" }
];

// Helper seguro para bordes redondeados en Canvas
function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/* ------------------------------------------------------------
   INICIALIZACIÓN THREE.JS
   ------------------------------------------------------------ */
function initThree() {
  const canvas = document.getElementById('universeCanvas');
  if (!canvas) return;
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Escena
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x04050d, 0.0035);

  // Cámara Adaptativa (Móvil vs PC)
  const initialFov = getResponsiveFov();
  camera = new THREE.PerspectiveCamera(initialFov, width / height, 0.1, 1500);
  updateCameraPosition();

  // Renderer con fallback
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Raycaster
  raycaster = new THREE.Raycaster();
  mouseNorm = new THREE.Vector2();

  // Luces
  const ambientLight = new THREE.AmbientLight(0x2d3748, 1.2);
  scene.add(ambientLight);

  const sunLight = new THREE.PointLight(0xfff5e6, 3.5, 350, 0.6);
  sunLight.position.set(0, 0, 0);
  scene.add(sunLight);

  // Crear Elementos Cósmicos
  createSun();
  createSpiralGalaxy();
  createPlanets();
  createConstellations();

  // Event Listeners
  window.addEventListener('resize', onWindowResize);
  setupControls(canvas);

  isThreeReady = true;

  // Loop de Animación
  animate();
}

function createRadialGlowTexture(colorInner, colorOuter) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, colorInner);
  grad.addColorStop(0.3, colorInner);
  grad.addColorStop(0.7, colorOuter);
  grad.addColorStop(1, 'rgba(0,0,0,0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  return new THREE.CanvasTexture(canvas);
}

function createProceduralPlanetTexture(hexColor) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  const col = new THREE.Color(hexColor);
  const r = Math.floor(col.r * 255);
  const g = Math.floor(col.g * 255);
  const b = Math.floor(col.b * 255);

  // Fondo con franjas planetarias suaves
  for (let y = 0; y < 128; y++) {
    const factor = 0.8 + 0.35 * Math.sin(y * 0.18) + 0.15 * Math.sin(y * 0.5);
    const cr = Math.min(255, Math.floor(r * factor));
    const cg = Math.min(255, Math.floor(g * factor));
    const cb = Math.min(255, Math.floor(b * factor));
    ctx.fillStyle = `rgb(${cr},${cg},${cb})`;
    ctx.fillRect(0, y, 256, 1);
  }

  // Remolinos y detalles cósmicos
  ctx.fillStyle = 'rgba(255,255,255,0.2)';
  for (let i = 0; i < 15; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * 256, Math.random() * 128, Math.random() * 12 + 4, 0, Math.PI * 2);
    ctx.fill();
  }

  return new THREE.CanvasTexture(canvas);
}

function createTextBillboard(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(10, 14, 34, 0.75)';
  ctx.strokeStyle = 'rgba(255, 209, 102, 0.6)';
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, 4, 4, 248, 56, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#ffd166';
  ctx.font = 'bold 20px Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 32);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(6, 1.5, 1);
  return sprite;
}

/* ------------------------------------------------------------
   SOL CENTRAL (NUESTRO SOL)
   ------------------------------------------------------------ */
function createSun() {
  const group = new THREE.Group();

  const sunGeo = new THREE.SphereGeometry(6, 32, 32);
  const sunMat = new THREE.MeshBasicMaterial({ color: 0xffd166 });
  sunMesh = new THREE.Mesh(sunGeo, sunMat);
  group.add(sunMesh);

  // Corona del Sol
  const coronaTexture = createRadialGlowTexture('rgba(255, 230, 150, 0.9)', 'rgba(255, 117, 143, 0.25)');
  const coronaMat = new THREE.SpriteMaterial({
    map: coronaTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    color: 0xffeedd
  });
  sunCorona = new THREE.Sprite(coronaMat);
  sunCorona.scale.set(28, 28, 1);
  group.add(sunCorona);

  // Aura pulsante
  const heartGlowMat = new THREE.SpriteMaterial({
    map: createRadialGlowTexture('rgba(255, 117, 143, 0.7)', 'rgba(199, 125, 255, 0.1)'),
    transparent: true,
    blending: THREE.AdditiveBlending
  });
  const heartGlow = new THREE.Sprite(heartGlowMat);
  heartGlow.scale.set(38, 38, 1);
  group.add(heartGlow);

  const sunLabel = createTextBillboard("☀️ Nuestro Sol • Jose & Tamy");
  sunLabel.position.set(0, 9, 0);
  group.add(sunLabel);

  group.userData = { isSun: true, name: "El Centro de Nuestro Universo" };
  scene.add(group);
}

/* ------------------------------------------------------------
   ESPIRAL GALÁCTICA DE ESTRELLAS
   ------------------------------------------------------------ */
function createSpiralGalaxy() {
  const particleCount = 4500;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const palette = [
    new THREE.Color(0xffd166),
    new THREE.Color(0xff758f),
    new THREE.Color(0x4cc9f0),
    new THREE.Color(0xc77dff),
    new THREE.Color(0xffffff)
  ];

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const arms = 3;
    const armIndex = i % arms;
    const distance = Math.pow(Math.random(), 1.6) * 160 + 10;
    const angle = (distance * 0.08) + ((armIndex * 2 * Math.PI) / arms);

    const randomSpreadX = (Math.random() - 0.5) * (distance * 0.35);
    const randomSpreadY = (Math.random() - 0.5) * (distance * 0.22);
    const randomSpreadZ = (Math.random() - 0.5) * (distance * 0.35);

    positions[i3] = Math.cos(angle) * distance + randomSpreadX;
    positions[i3 + 1] = randomSpreadY;
    positions[i3 + 2] = Math.sin(angle) * distance + randomSpreadZ;

    const col = palette[Math.floor(Math.random() * palette.length)];
    colors[i3] = col.r;
    colors[i3 + 1] = col.g;
    colors[i3 + 2] = col.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const starTex = createRadialGlowTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0.1)');
  const material = new THREE.PointsMaterial({
    size: 1.4,
    map: starTex,
    transparent: true,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  galaxyParticles = new THREE.Points(geometry, material);
  scene.add(galaxyParticles);
}

/* ------------------------------------------------------------
   PLANETAS DE RECUERDOS (9 PLANETAS)
   ------------------------------------------------------------ */
function createPlanets() {
  PLANET_CONFIG.forEach((cfg, index) => {
    const planetGroup = new THREE.Group();

    // 1. Línea orbital
    const orbitPoints = [];
    for (let a = 0; a <= 64; a++) {
      const theta = (a / 64) * Math.PI * 2;
      orbitPoints.push(new THREE.Vector3(Math.cos(theta) * cfg.dist, 0, Math.sin(theta) * cfg.dist));
    }
    const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12
    });
    const orbitLine = new THREE.Line(orbitGeo, orbitMat);
    scene.add(orbitLine);

    // 2. Esfera del Planeta
    const planetGeo = new THREE.SphereGeometry(cfg.size, 32, 32);
    const planetTex = createProceduralPlanetTexture(cfg.color);
    const planetMat = new THREE.MeshStandardMaterial({
      map: planetTex,
      roughness: 0.7,
      metalness: 0.2
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    planetGroup.add(planetMesh);

    // 3. Anillos de Saturno si aplica
    if (cfg.ring) {
      const ringGeo = new THREE.RingGeometry(cfg.size * 1.35, cfg.size * 1.9, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2.4;
      planetGroup.add(ringMesh);
    }

    // 4. Halo atmosférico
    const haloTex = createRadialGlowTexture('rgba(255,255,255,0.4)', 'rgba(0,0,0,0)');
    const haloMat = new THREE.SpriteMaterial({
      map: haloTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      color: cfg.color
    });
    const halo = new THREE.Sprite(haloMat);
    halo.scale.set(cfg.size * 3.2, cfg.size * 3.2, 1);
    planetGroup.add(halo);

    // 5. Etiqueta 3D sobre el planeta
    const label = createTextBillboard(`🪐 Recuerdo #${index + 1}`);
    label.position.set(0, cfg.size + 1.8, 0);
    planetGroup.add(label);

    const initialAngle = (index / PLANET_CONFIG.length) * Math.PI * 2 + Math.random();

    planetGroup.userData = {
      isPlanet: true,
      index: index,
      dist: cfg.dist,
      speed: cfg.speed,
      angle: initialAngle,
      mesh: planetMesh,
      photoData: CONFIG.photos[index]
    };

    planetGroup.position.set(
      Math.cos(initialAngle) * cfg.dist,
      Math.sin(initialAngle * 2) * 1.5,
      Math.sin(initialAngle) * cfg.dist
    );

    scene.add(planetGroup);
    planetMeshes.push(planetGroup);
  });
}

/* ------------------------------------------------------------
   3 CONSTELACIONES DEL AMOR
   ------------------------------------------------------------ */
function createConstellations() {
  constellationGroup = new THREE.Group();

  // Mes 1: Chispa Cósmica
  const c1Points = [
    new THREE.Vector3(-60, 25, -50),
    new THREE.Vector3(-45, 35, -45),
    new THREE.Vector3(-30, 28, -55),
    new THREE.Vector3(-35, 18, -40),
    new THREE.Vector3(-50, 15, -45),
    new THREE.Vector3(-60, 25, -50)
  ];
  addConstellationLines(c1Points, 0xffd166, "Mes 1: La Chispa Cósmica ⭐");

  // Mes 2: Gravedad del Amor
  const c2Points = [
    new THREE.Vector3(45, 30, -55),
    new THREE.Vector3(60, 40, -45),
    new THREE.Vector3(75, 25, -50),
    new THREE.Vector3(65, 15, -60),
    new THREE.Vector3(50, 18, -50),
    new THREE.Vector3(45, 30, -55)
  ];
  addConstellationLines(c2Points, 0xff758f, "Mes 2: La Danza de la Gravedad 💫");

  // Mes 3: Amor Infinito
  const c3Points = [
    new THREE.Vector3(-15, 45, -70),
    new THREE.Vector3(0, 52, -65),
    new THREE.Vector3(15, 45, -70),
    new THREE.Vector3(20, 32, -65),
    new THREE.Vector3(0, 20, -60),
    new THREE.Vector3(-20, 32, -65),
    new THREE.Vector3(-15, 45, -70)
  ];
  addConstellationLines(c3Points, 0x4cc9f0, "Mes 3: El Amor Infinito 💖");

  scene.add(constellationGroup);
}

function addConstellationLines(points, hexColor, labelText) {
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = new THREE.LineBasicMaterial({
    color: hexColor,
    transparent: true,
    opacity: 0.65
  });
  const line = new THREE.Line(geo, mat);
  constellationGroup.add(line);

  const starTex = createRadialGlowTexture('rgba(255,255,255,1)', 'rgba(255,200,220,0.3)');
  points.forEach(pt => {
    const spriteMat = new THREE.SpriteMaterial({
      map: starTex,
      color: hexColor,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.copy(pt);
    sprite.scale.set(3.2, 3.2, 1);
    constellationGroup.add(sprite);
  });

  const center = new THREE.Vector3();
  points.forEach(p => center.add(p));
  center.divideScalar(points.length);
  center.y += 3.5;

  const tag = createTextBillboard(labelText);
  tag.position.copy(center);
  tag.scale.set(7.5, 1.8, 1);
  constellationGroup.add(tag);
}

/* ------------------------------------------------------------
   ESTRELLAS FUGACES & COMETAS
   ------------------------------------------------------------ */
function spawnShootingStar(customColorHex = null) {
  if (!isThreeReady || !scene) return;
  const startX = (Math.random() - 0.5) * 160;
  const startY = Math.random() * 40 + 20;
  const startZ = (Math.random() - 0.5) * 160;

  const dirX = (Math.random() - 0.5) * 2 - 0.5;
  const dirY = -1 - Math.random();
  const dirZ = (Math.random() - 0.5) * 2;

  const color = customColorHex ? new THREE.Color(customColorHex) : new THREE.Color(0xffd166);

  const geo = new THREE.BufferGeometry();
  const points = [
    new THREE.Vector3(startX, startY, startZ),
    new THREE.Vector3(startX - dirX * 6, startY - dirY * 6, startZ - dirZ * 6)
  ];
  geo.setFromPoints(points);

  const mat = new THREE.LineBasicMaterial({
    color: color,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending
  });

  const line = new THREE.Line(geo, mat);
  scene.add(line);

  shootingStars.push({
    mesh: line,
    vx: dirX * 2.2,
    vy: dirY * 2.2,
    vz: dirZ * 2.2,
    life: 1.0,
    decay: 0.02
  });
}

function triggerMeteorShower(count = 25) {
  showToast("✨ ¡Lluvia de meteoros cósmicos por nuestros 3 meses!");
  let launched = 0;
  const interval = setInterval(() => {
    spawnShootingStar();
    launched++;
    if (launched >= count) clearInterval(interval);
  }, 120);
}

/* ------------------------------------------------------------
   CONTROLES DE CÁMARA (MOUSE, TOUCH, PINCH TO ZOOM)
   ------------------------------------------------------------ */
function setupControls(canvas) {
  canvas.addEventListener('mousedown', (e) => {
    pointer.isDown = true;
    pointer.hasMoved = false;
    pointer.prevX = e.clientX;
    pointer.prevY = e.clientY;
    pointer.downTime = performance.now();
    isInteracting = true;
  });

  window.addEventListener('mousemove', (e) => {
    if (!pointer.isDown) return;
    const dx = e.clientX - pointer.prevX;
    const dy = e.clientY - pointer.prevY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) pointer.hasMoved = true;

    spherical.targetTheta -= dx * 0.005;
    spherical.targetPhi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.targetPhi + dy * 0.005));

    pointer.prevX = e.clientX;
    pointer.prevY = e.clientY;
  });

  window.addEventListener('mouseup', (e) => {
    if (pointer.isDown && !pointer.hasMoved && (performance.now() - pointer.downTime) < 300) {
      handleClickOrTap(e.clientX, e.clientY);
    }
    pointer.isDown = false;
    setTimeout(() => { isInteracting = false; }, 1500);
  });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    spherical.targetRadius = Math.max(20, Math.min(180, spherical.targetRadius + e.deltaY * 0.08));
    isInteracting = true;
    setTimeout(() => { isInteracting = false; }, 1200);
  }, { passive: false });

  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      pointer.isDown = true;
      pointer.hasMoved = false;
      pointer.prevX = e.touches[0].clientX;
      pointer.prevY = e.touches[0].clientY;
      pointer.downTime = performance.now();
      isInteracting = true;
    } else if (e.touches.length === 2) {
      touchDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && pointer.isDown) {
      const dx = e.touches[0].clientX - pointer.prevX;
      const dy = e.touches[0].clientY - pointer.prevY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) pointer.hasMoved = true;

      spherical.targetTheta -= dx * 0.006;
      spherical.targetPhi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.targetPhi + dy * 0.006));

      pointer.prevX = e.touches[0].clientX;
      pointer.prevY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      const newDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = (touchDistance - newDist) * 0.25;
      spherical.targetRadius = Math.max(20, Math.min(180, spherical.targetRadius + delta));
      touchDistance = newDist;
    }
  }, { passive: true });

  canvas.addEventListener('touchend', (e) => {
    if (pointer.isDown && !pointer.hasMoved && (performance.now() - pointer.downTime) < 350) {
      handleClickOrTap(pointer.prevX, pointer.prevY);
    }
    pointer.isDown = false;
    setTimeout(() => { isInteracting = false; }, 1500);
  });
}

function updateCameraPosition() {
  if (!camera) return;
  const sinPhi = Math.sin(spherical.phi);
  const cosPhi = Math.cos(spherical.phi);
  const sinTheta = Math.sin(spherical.theta);
  const cosTheta = Math.cos(spherical.theta);

  camera.position.x = cameraTarget.x + spherical.radius * sinPhi * sinTheta;
  camera.position.y = cameraTarget.y + spherical.radius * cosPhi;
  camera.position.z = cameraTarget.z + spherical.radius * sinPhi * cosTheta;

  camera.lookAt(targetLookAt);
}

function onWindowResize() {
  if (!camera || !renderer) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.fov = getResponsiveFov();
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);

  if (!isInteracting) {
    spherical.targetRadius = getResponsiveCameraRadius();
  }
}

function handleClickOrTap(clientX, clientY) {
  if (!isThreeReady || !raycaster || !camera) return;

  mouseNorm.x = (clientX / window.innerWidth) * 2 - 1;
  mouseNorm.y = -(clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouseNorm, camera);

  // En móvil incluimos la esfera, anillos y etiqueta para facilitar el toque táctil
  const interactiveObjects = [];
  planetMeshes.forEach(p => {
    p.children.forEach(child => {
      interactiveObjects.push(child);
    });
  });
  if (sunMesh) {
    interactiveObjects.push(sunMesh);
    if (sunMesh.parent) {
      sunMesh.parent.children.forEach(child => interactiveObjects.push(child));
    }
  }

  const intersects = raycaster.intersectObjects(interactiveObjects, false);

  if (intersects.length > 0) {
    const hitObj = intersects[0].object;
    if (hitObj === sunMesh || hitObj.parent?.userData?.isSun) {
      openLetterModal();
    } else {
      const clickedPlanet = planetMeshes.find(p => p === hitObj || p === hitObj.parent || p.children.includes(hitObj));
      if (clickedPlanet) {
        openMemoryModal(clickedPlanet.userData.index);
        flyCameraTo(clickedPlanet.position, 18);
      }
    }
  } else {
    spawnShootingStar();
  }
}

function flyCameraTo(targetPos, distance = 30) {
  targetLookAt.copy(targetPos);
  const responsiveDist = isMobileDevice() ? distance * 1.35 : distance;
  spherical.targetRadius = responsiveDist;
}

function resetCameraFocus() {
  targetLookAt.set(0, 0, 0);
  cameraTarget.set(0, 0, 0);
  spherical.targetRadius = getResponsiveCameraRadius();
}

/* ------------------------------------------------------------
   LOOP DE ANIMACIÓN (60 FPS)
   ------------------------------------------------------------ */
function animate() {
  requestAnimationFrame(animate);

  planetMeshes.forEach(p => {
    p.userData.angle += p.userData.speed;
    p.position.x = Math.cos(p.userData.angle) * p.userData.dist;
    p.position.z = Math.sin(p.userData.angle) * p.userData.dist;
    p.userData.mesh.rotation.y += 0.015;
  });

  if (sunMesh) {
    sunMesh.rotation.y += 0.003;
    const pulse = 1 + Math.sin(performance.now() * 0.002) * 0.06;
    if (sunCorona) sunCorona.scale.set(28 * pulse, 28 * pulse, 1);
  }

  if (galaxyParticles) {
    galaxyParticles.rotation.y += 0.0004;
  }

  if (autoRotate && !isInteracting) {
    spherical.targetTheta += 0.0015;
  }

  spherical.theta += (spherical.targetTheta - spherical.theta) * 0.08;
  spherical.phi += (spherical.targetPhi - spherical.phi) * 0.08;
  spherical.radius += (spherical.targetRadius - spherical.radius) * 0.08;

  cameraTarget.lerp(targetLookAt, 0.05);
  updateCameraPosition();

  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const star = shootingStars[i];
    star.mesh.position.x += star.vx;
    star.mesh.position.y += star.vy;
    star.mesh.position.z += star.vz;
    star.life -= star.decay;
    star.mesh.material.opacity = Math.max(0, star.life);

    if (star.life <= 0) {
      scene.remove(star.mesh);
      shootingStars.splice(i, 1);
    }
  }

  if (Math.random() < 0.012) {
    spawnShootingStar();
  }

  renderer.render(scene, camera);
}

/* ============================================================
   FALLBACK 2D EN CASO DE DISPOSITIVOS SIN WEBGL
   ============================================================ */
function initFallback2D() {
  const canvas = document.getElementById('universeCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005
    });
  }

  let angle = 0;
  function render2D() {
    ctx.fillStyle = '#04050d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Estrellas
    stars.forEach(s => {
      s.alpha += s.speed;
      const op = Math.abs(Math.sin(s.alpha));
      ctx.fillStyle = `rgba(255, 255, 255, ${op})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Sol Central
    const sunGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 45);
    sunGrad.addColorStop(0, '#ffd166');
    sunGrad.addColorStop(0.5, '#ff758f');
    sunGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 45, 0, Math.PI * 2);
    ctx.fill();

    // 9 Planetas en 2D
    angle += 0.004;
    PLANET_CONFIG.forEach((cfg, idx) => {
      const curAngle = angle * (cfg.speed * 200) + (idx * 0.7);
      const px = cx + Math.cos(curAngle) * (cfg.dist * 3.5);
      const py = cy + Math.sin(curAngle) * (cfg.dist * 2.2);

      // Órbita tenue
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.ellipse(cx, cy, cfg.dist * 3.5, cfg.dist * 2.2, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Planeta
      const col = new THREE.Color ? new THREE.Color(cfg.color).getStyle() : '#ffd166';
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(px, py, cfg.size * 2, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render2D);
  }
  render2D();

  // Clic en canvas 2D abre el siguiente recuerdo
  canvas.addEventListener('click', () => {
    currentMemoryIndex = (currentMemoryIndex + 1) % CONFIG.photos.length;
    openMemoryModal(currentMemoryIndex);
  });
}

/* ============================================================
   3. CONTADOR DE AMOR EN TIEMPO REAL (DESDE EL 27 DE JULIO)
   ============================================================ */
function startLiveCounter() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function update() {
    const now = new Date();
    const diff = Math.max(0, now - CONFIG.startDate);

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ============================================================
   4. SISTEMA DE REPRODUCTOR DE MÚSICA
   ============================================================ */
let isPlaying = false;
const bgMusic = document.getElementById('bg-music');
const playPauseBtn = document.getElementById('play-pause-btn');
const musicPlayerCard = document.getElementById('music-player');
const playIcon = document.getElementById('play-icon');
const musicDiscWrap = document.getElementById('music-disc-wrap');

function setupMusicPlayer() {
  if (!bgMusic) return;

  function toggleMusic() {
    if (isPlaying) {
      bgMusic.pause();
      isPlaying = false;
      if (playIcon) playIcon.textContent = '▶️';
      if (musicPlayerCard) musicPlayerCard.classList.add('paused');
    } else {
      bgMusic.play().then(() => {
        isPlaying = true;
        if (playIcon) playIcon.textContent = '⏸️';
        if (musicPlayerCard) musicPlayerCard.classList.remove('paused');
      }).catch(err => {
        console.warn("Autoplay bloqueado:", err);
      });
    }
  }

  if (playPauseBtn) playPauseBtn.addEventListener('click', toggleMusic);
  if (musicDiscWrap) musicDiscWrap.addEventListener('click', toggleMusic);
}

function startMusicAutomatically() {
  if (!bgMusic) return;
  bgMusic.play().then(() => {
    isPlaying = true;
    if (playIcon) playIcon.textContent = '⏸️';
    if (musicPlayerCard) musicPlayerCard.classList.remove('paused');
  }).catch(() => {
    console.log("Audio en espera de interacción táctil/clic.");
  });
}

/* ============================================================
   5. SISTEMA DE MODALES Y VISTAS
   ============================================================ */
let currentMemoryIndex = 0;
let currentReasonIndex = 0;

function setupModals() {
  // Modal 1: Memoria Polaroid
  const memoryModal = document.getElementById('memory-modal');
  const closeMemoryBtn = document.getElementById('close-memory-btn');
  const memoryBackdrop = document.getElementById('memory-backdrop');
  const modalPrevMemory = document.getElementById('modal-prev-memory');
  const modalNextMemory = document.getElementById('modal-next-memory');
  const sendHeartBtn = document.getElementById('send-cosmic-heart-btn');

  function closeMemory() {
    if (memoryModal) memoryModal.classList.remove('open');
    resetCameraFocus();
  }
  if (closeMemoryBtn) closeMemoryBtn.addEventListener('click', closeMemory);
  if (memoryBackdrop) memoryBackdrop.addEventListener('click', closeMemory);

  if (modalPrevMemory) {
    modalPrevMemory.addEventListener('click', () => {
      currentMemoryIndex = (currentMemoryIndex - 1 + CONFIG.photos.length) % CONFIG.photos.length;
      openMemoryModal(currentMemoryIndex);
    });
  }

  if (modalNextMemory) {
    modalNextMemory.addEventListener('click', () => {
      currentMemoryIndex = (currentMemoryIndex + 1) % CONFIG.photos.length;
      openMemoryModal(currentMemoryIndex);
    });
  }

  if (sendHeartBtn) {
    sendHeartBtn.addEventListener('click', () => {
      triggerCosmicHeartBurst();
      showToast("💖 ¡Enviaste una ráfaga de amor cósmico a Tamy!");
    });
  }

  // Modal 2: Deseo Cósmico
  const wishModal = document.getElementById('wish-modal');
  const openWishBtn = document.getElementById('open-wish-btn');
  const closeWishBtn = document.getElementById('close-wish-btn');
  const wishBackdrop = document.getElementById('wish-backdrop');
  const releaseCometBtn = document.getElementById('release-comet-btn');
  const wishInput = document.getElementById('custom-wish-input');
  const colorDots = document.querySelectorAll('.color-dot');
  let selectedCometColor = '#ffd166';

  if (openWishBtn) openWishBtn.addEventListener('click', () => wishModal && wishModal.classList.add('open'));
  function closeWish() { if (wishModal) wishModal.classList.remove('open'); }
  if (closeWishBtn) closeWishBtn.addEventListener('click', closeWish);
  if (wishBackdrop) wishBackdrop.addEventListener('click', closeWish);

  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const c = dot.getAttribute('data-color');
      if (c === 'gold') selectedCometColor = '#ffd166';
      else if (c === 'rose') selectedCometColor = '#ff758f';
      else if (c === 'cyan') selectedCometColor = '#4cc9f0';
      else if (c === 'violet') selectedCometColor = '#c77dff';
    });
  });

  document.querySelectorAll('.wish-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      if (wishInput) wishInput.value = tag.textContent;
    });
  });

  if (releaseCometBtn) {
    releaseCometBtn.addEventListener('click', () => {
      const text = (wishInput && wishInput.value.trim()) || "Seguir orbitando juntos por toda la eternidad ❤️";
      spawnShootingStar(selectedCometColor);
      spawnShootingStar(selectedCometColor);
      closeWish();
      if (wishInput) wishInput.value = '';
      showToast(`🌠 «${text}» fue lanzado al cosmos.`);
    });
  }

  // Modal 3: Carta 3 Meses
  const letterModal = document.getElementById('letter-modal');
  const openLetterBtn = document.getElementById('open-letter-btn');
  const closeLetterBtn = document.getElementById('close-letter-btn');
  const letterBackdrop = document.getElementById('letter-backdrop');
  const letterCelebrateBtn = document.getElementById('letter-celebrate-btn');

  if (openLetterBtn) openLetterBtn.addEventListener('click', openLetterModal);
  function closeLetter() { if (letterModal) letterModal.classList.remove('open'); }
  if (closeLetterBtn) closeLetterBtn.addEventListener('click', closeLetter);
  if (letterBackdrop) letterBackdrop.addEventListener('click', closeLetter);

  if (letterCelebrateBtn) {
    letterCelebrateBtn.addEventListener('click', () => {
      closeLetter();
      triggerMeteorShower(30);
      triggerCosmicHeartBurst();
      showToast("🎆 ¡Supernova cósmica activada! ¡Felices 3 meses, Tamy!");
    });
  }

  // Modal 4: 90 Razones Cósmicas
  const reasonsModal = document.getElementById('reasons-modal');
  const openReasonsBtn = document.getElementById('open-reasons-btn');
  const closeReasonsBtn = document.getElementById('close-reasons-btn');
  const reasonsBackdrop = document.getElementById('reasons-backdrop');
  const prevReasonBtn = document.getElementById('prev-reason-btn');
  const nextReasonBtn = document.getElementById('next-reason-btn');
  const randomReasonBtn = document.getElementById('random-reason-btn');

  if (openReasonsBtn) {
    openReasonsBtn.addEventListener('click', () => {
      updateReasonView();
      if (reasonsModal) reasonsModal.classList.add('open');
    });
  }
  function closeReasons() { if (reasonsModal) reasonsModal.classList.remove('open'); }
  if (closeReasonsBtn) closeReasonsBtn.addEventListener('click', closeReasons);
  if (reasonsBackdrop) reasonsBackdrop.addEventListener('click', closeReasons);

  if (prevReasonBtn) {
    prevReasonBtn.addEventListener('click', () => {
      currentReasonIndex = (currentReasonIndex - 1 + CONFIG.reasons.length) % CONFIG.reasons.length;
      updateReasonView();
    });
  }

  if (nextReasonBtn) {
    nextReasonBtn.addEventListener('click', () => {
      currentReasonIndex = (currentReasonIndex + 1) % CONFIG.reasons.length;
      updateReasonView();
    });
  }

  if (randomReasonBtn) {
    randomReasonBtn.addEventListener('click', () => {
      currentReasonIndex = Math.floor(Math.random() * CONFIG.reasons.length);
      updateReasonView();
    });
  }

  // Modal 5: Las 3 Constelaciones
  const constellationsModal = document.getElementById('constellations-modal');
  const openConstellationsBtn = document.getElementById('open-constellations-btn');
  const closeConstellationsBtn = document.getElementById('close-constellations-btn');
  const constellationsBackdrop = document.getElementById('constellations-backdrop');
  const view3DConstellationsBtn = document.getElementById('view-constellations-in-3d-btn');

  if (openConstellationsBtn) openConstellationsBtn.addEventListener('click', () => constellationsModal && constellationsModal.classList.add('open'));
  function closeConstellations() { if (constellationsModal) constellationsModal.classList.remove('open'); }
  if (closeConstellationsBtn) closeConstellationsBtn.addEventListener('click', closeConstellations);
  if (constellationsBackdrop) constellationsBackdrop.addEventListener('click', closeConstellations);

  if (view3DConstellationsBtn) {
    view3DConstellationsBtn.addEventListener('click', () => {
      closeConstellations();
      spherical.targetPhi = 1.0;
      spherical.targetTheta = 0;
      spherical.targetRadius = 110;
      showToast("🔭 Contemplando las 3 Constelaciones de nuestro amor.");
    });
  }

  // Botón Lluvia de Meteoros en el Dock
  const meteorDockBtn = document.getElementById('trigger-meteor-btn');
  if (meteorDockBtn) {
    meteorDockBtn.addEventListener('click', () => {
      triggerMeteorShower(20);
    });
  }

  // Botón Tour Guiado
  const tourBtn = document.getElementById('tour-btn');
  if (tourBtn) {
    tourBtn.addEventListener('click', startGuidedTour);
  }
}

function openMemoryModal(index) {
  currentMemoryIndex = index;
  const memoryModal = document.getElementById('memory-modal');
  const badge = document.getElementById('modal-planet-badge');
  const img = document.getElementById('modal-memory-img');
  const title = document.getElementById('modal-memory-title');
  const desc = document.getElementById('modal-memory-desc');

  const data = CONFIG.photos[index];
  if (badge) badge.textContent = `🪐 Planeta de Recuerdos #${index + 1} de 9`;
  if (img) img.src = data.url;
  if (title) title.textContent = data.title;
  if (desc) desc.textContent = data.desc;

  if (memoryModal) memoryModal.classList.add('open');
}

function openLetterModal() {
  const letterModal = document.getElementById('letter-modal');
  if (letterModal) letterModal.classList.add('open');
}

function updateReasonView() {
  const numberEl = document.getElementById('reason-number');
  const textEl = document.getElementById('reason-text');
  const progressEl = document.getElementById('reasons-progress');

  if (numberEl) numberEl.textContent = `Razón #${currentReasonIndex + 1} de ${CONFIG.reasons.length}`;
  if (textEl) textEl.textContent = CONFIG.reasons[currentReasonIndex];

  if (progressEl) {
    const pct = ((currentReasonIndex + 1) / CONFIG.reasons.length) * 100;
    progressEl.style.width = `${pct}%`;
  }
}

/* ------------------------------------------------------------
   TOUR CÓSMICO GUIADO
   ------------------------------------------------------------ */
let isTourActive = false;
function startGuidedTour() {
  if (isTourActive) return;
  isTourActive = true;
  showToast("🔭 Iniciando Tour Cósmico por nuestros 3 meses de amor...");

  let idx = 0;
  function nextPlanetInTour() {
    if (idx >= planetMeshes.length) {
      isTourActive = false;
      resetCameraFocus();
      showToast("✨ Tour finalizado: ¡Felices 3 meses juntos, Tamy! ❤️");
      return;
    }

    const planet = planetMeshes[idx];
    flyCameraTo(planet.position, 16);
    openMemoryModal(idx);

    setTimeout(() => {
      const memoryModal = document.getElementById('memory-modal');
      if (memoryModal) memoryModal.classList.remove('open');
      idx++;
      setTimeout(nextPlanetInTour, 900);
    }, 4200);
  }

  nextPlanetInTour();
}

/* ------------------------------------------------------------
   EFECTO DE RÁFAGA DE CORAZONES ESTELARES
   ------------------------------------------------------------ */
function triggerCosmicHeartBurst() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.textContent = ['💖', '✨', '🪐', '💫', '🌹'][Math.floor(Math.random() * 5)];
    heart.style.position = 'fixed';
    heart.style.left = `${window.innerWidth / 2 + (Math.random() - 0.5) * 200}px`;
    heart.style.top = `${window.innerHeight / 2 + (Math.random() - 0.5) * 150}px`;
    heart.style.fontSize = `${Math.random() * 20 + 20}px`;
    heart.style.zIndex = '99999';
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'all 1.6s cubic-bezier(0.16, 1, 0.3, 1)';
    heart.style.transform = 'scale(0) translateY(0)';
    heart.style.opacity = '1';
    document.body.appendChild(heart);

    setTimeout(() => {
      const offsetX = (Math.random() - 0.5) * 350;
      const offsetY = -(Math.random() * 300 + 80);
      heart.style.transform = `scale(1.4) translate(${offsetX}px, ${offsetY}px)`;
      heart.style.opacity = '0';
    }, 20);

    setTimeout(() => {
      heart.remove();
    }, 1800);
  }
}

/* ------------------------------------------------------------
   TOAST NOTIFICATION FLOTANTE
   ------------------------------------------------------------ */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('floating-toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ============================================================
   6. PANTALLA DE ENTRADA HIPERESPACIAL
   ============================================================ */
function setupIntroScreen() {
  const introScreen = document.getElementById('intro-screen');
  const startBtn = document.getElementById('start-btn');

  if (!startBtn || !introScreen) return;

  startBtn.addEventListener('click', () => {
    startMusicAutomatically();

    spherical.targetRadius = 55;
    setTimeout(() => {
      spherical.targetRadius = 80;
    }, 1500);

    introScreen.classList.add('hide');

    setTimeout(() => {
      showToast("🌌 ¡Bienvenida a Nuestra Galaxia de Amor, mi Tamy! ❤️");
    }, 1200);
  });
}

/* ============================================================
   7. ARRANQUE PRINCIPAL SEGURO
   ============================================================ */
function initApp() {
  try {
    if (typeof THREE !== 'undefined') {
      initThree();
    } else {
      console.warn("Three.js no detectado, usando motor 2D cósmico.");
      initFallback2D();
    }
  } catch (err) {
    console.error("Error al iniciar 3D, activando respaldo 2D:", err);
    initFallback2D();
  }

  startLiveCounter();
  setupMusicPlayer();
  setupModals();
  setupIntroScreen();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
