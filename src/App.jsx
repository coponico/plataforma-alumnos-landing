import { useState, useEffect } from 'react';
import { 
  FaMobileAlt, 
  FaShieldAlt, 
  FaGamepad, 
  FaMoon, 
  FaSun, 
  FaListUl, 
  FaUserCheck, 
  FaTrophy,
  FaWhatsapp // <--- Importamos el icono de WhatsApp
} from 'react-icons/fa';
import './App.css'; 

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const APP_URL = "https://plataforma-alumnos.online/"; 
  const WHATSAPP_URL = "https://wa.me/5491161302077"; // Tu número con formato internacional

  return (
    <div className="app-shell">
      
      {/* NAVBAR */}
      <nav className="app-navbar">
        <div className="app-navbar-left">
          <span className="app-title">Plataforma Alumnos</span>
        </div>
        <div className="app-navbar-right">
          <button 
            className="theme-toggle" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Cambiar tema"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header style={{ textAlign: 'center', padding: '60px 0 80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px', padding: '8px 16px', background: 'var(--primary-soft)', color: 'var(--primary)', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem', display: 'inline-block' }}>
          🚀 Nueva Versión 2.0
        </div>

        <h1 className="app-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1, maxWidth: '900px' }}>
          Gestión de Aula <br/> <span style={{color: 'var(--primary)'}}>Gamificada y Simple</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Olvídate del Excel. Convierte la conducta y participación en un juego donde todos quieren ganar.
        </p>
        
        {/* BOTÓN DEMO + CREDENCIALES */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
          <a href={APP_URL} className="btn-primary" style={{marginBottom: '20px'}}>
            Probá la Demo
          </a>
          
          {/* Cajita de credenciales */}
          <div style={{ 
            padding: '15px 25px', 
            background: 'var(--bg-nav)', 
            border: '1px solid var(--border)', 
            borderRadius: '12px',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ marginBottom: '5px' }}>📧 <strong>Cuenta Demo:</strong> admin@clase.com</div>
            <div>🔑 <strong>Contraseña:</strong> admin123</div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="card" style={{ padding: '0', overflow: 'hidden', border: 'none', background: 'transparent', boxShadow: 'none' }}>
           <img 
             src={darkMode 
               ? "/screenshots/hero-dashboard-pc-dark.png"
               : "/screenshots/hero-dashboard-pc-light.png"
             } 
             alt="Dashboard PC" 
             className="desktop-only"
             style={{ borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }} 
           />

           <img 
             src={darkMode 
               ? "/screenshots/hero-dashboard-mobile-dark.png"
               : "/screenshots/hero-dashboard-mobile-light.png"
             } 
             alt="Dashboard Móvil" 
             className="mobile-only" 
             style={{ maxWidth: '280px', margin: '0 auto', border: '4px solid #333', borderRadius: '24px' }} 
           />
           <p className="mobile-only" style={{marginTop:'10px', fontSize:'0.8rem', color:'var(--text-muted)'}}>
             Vista móvil optimizada
           </p>
        </div>
      </header>

      {/* FEATURES GRID */}
      <section style={{ padding: '40px 0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem' }}>
          Todo lo que necesitás para tu clase
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 60px' }}>
          Una herramienta diseñada pensando en la seguridad del docente y la motivación del alumno.
        </p>
        
        <div className="features-grid">
          <div className="card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px' }}><FaUserCheck /></div>
            <h3>Admisión Segura</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Si "Juancito" no es alumno, no entra. Los alumnos se registran, pero <strong>vos aprobás cada cuenta</strong> manualmente.</p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--warning)', marginBottom: '20px' }}><FaGamepad /></div>
            <h3>Gamificación Real</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Puntos por asistencia y conducta. Trofeos automáticos y un ranking en vivo que motiva a la clase.</p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--success)', marginBottom: '20px' }}><FaMobileAlt /></div>
            <h3>Desde tu Celular</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Asigná o restá puntos con un solo toque mientras caminás por el aula. Interfaz rápida y liviana.</p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '2.5rem', color: '#8b5cf6', marginBottom: '20px' }}><FaListUl /></div>
            <h3>Historial Transparente</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Registro detallado. <em>"El día 12/05 restamos puntos por no traer material"</em>. Todo queda guardado.</p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--danger)', marginBottom: '20px' }}><FaShieldAlt /></div>
            <h3>Control de Contenido</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Las fotos de perfil de los alumnos <strong>no se hacen públicas</strong> hasta que vos las apruebes.</p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '2.5rem', color: '#ec4899', marginBottom: '20px' }}><FaTrophy /></div>
            <h3>Sistema de Progresión</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Usá el ranking para definir notas conceptuales u otorgar beneficios a fin de cuatrimestre.</p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN: RECORRIDO VISUAL --- */}
      <section className="gallery-section" style={{ paddingTop: '40px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>Recorrido Visual</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '40px' }}>
          Conoce cada detalle de la plataforma, pantalla por pantalla.
        </p>

        {/* ZONA DOCENTE */}
        <div style={{textAlign: 'center'}}><span className="gallery-category-title">Zona Docente</span></div>
        <div className="gallery-grid">
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/1-crear-clase.png" alt="Crear Clase" /></div>
            <div className="gallery-caption"><h4>Crear Clases</h4><p>Organizá tus cursos y creá aulas virtuales.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/2-aprobar-alumno.png" alt="Aprobar Alumno" /></div>
            <div className="gallery-caption"><h4>Aprobación de Alumnos</h4><p>Aceptá o rechazá solicitudes de ingreso.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/3-aprobar-foto.png" alt="Aprobar Foto" /></div>
            <div className="gallery-caption"><h4>Moderación de Fotos</h4><p>Revisá las fotos de perfil antes de que se vean.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/4-asignar-clase.png" alt="Asignar Clase" /></div>
            <div className="gallery-caption"><h4>Asignar Clase</h4><p>Movés alumnos entre cursos rápidamente.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/5-asignar-puntos.png" alt="Asignar Puntos" /></div>
            <div className="gallery-caption"><h4>Gestión de Puntos</h4><p>Panel rápido para sumar o restar puntos.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/6-toggle-trofeos.png" alt="Configurar Trofeos" /></div>
            <div className="gallery-caption"><h4>Control de Trofeos</h4><p>Activá o desactivá el sistema de gamificación.</p></div>
          </div>
        </div>

        {/* ZONA ALUMNO Y SISTEMA */}
        <div style={{textAlign: 'center'}}><span className="gallery-category-title">Zona Alumno y Sistema</span></div>
        <div className="gallery-grid">
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/7-ranking.png" alt="Ranking" /></div>
            <div className="gallery-caption"><h4>Ranking en Vivo</h4><p>La tabla de posiciones se actualiza al instante.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/8-perfil-alumno.png" alt="Perfil Público" /></div>
            <div className="gallery-caption"><h4>Perfil del Alumno</h4><p>Visualización de medallas y nivel actual.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/9-mi-cuenta.png" alt="Mi Cuenta" /></div>
            <div className="gallery-caption"><h4>Personalización</h4><p>Cambio de foto y descripción personal.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/10-seguridad-cuenta.png" alt="Seguridad" /></div>
            <div className="gallery-caption"><h4>Seguridad de Cuenta</h4><p>Gestión de email y contraseñas.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/11-trofeos-faltantes.png" alt="Trofeos Faltantes" /></div>
            <div className="gallery-caption"><h4>Progreso Privado</h4><p>Lista de objetivos pendientes por cumplir.</p></div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container"><img src="/screenshots/12-recuperar-pass.png" alt="Recuperar Contraseña" /></div>
            <div className="gallery-caption"><h4>Recuperación</h4><p>Sistema seguro vía correo electrónico.</p></div>
          </div>
        </div>
      </section>
{/* CALL TO ACTION FINAL */}
      <section style={{ 
        padding: '60px 20px', 
        textAlign: 'center', 
        marginTop: '0px',
        backgroundColor: 'var(--bg-card)', 
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-md)',
        borderRadius: '20px' 
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Listo para empezar?</h2>
        
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Sumate a la plataforma que está cambiando la dinámica en las aulas.
        </p>
        
        {/* BOTÓN WHATSAPP VERDE */}
        <a 
          href={WHATSAPP_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-whatsapp"  // <--- AQUÍ CAMBIAMOS LA CLASE
          style={{ fontSize: '1.2rem' }}
        >
          <FaWhatsapp style={{fontSize: '1.4rem'}} /> Contactame
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '60px 0', borderTop: '1px solid var(--border)', marginTop: '40px' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Desarrollado por Martin de Vicente
        </p>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP (FIJO) */}
      <a 
        href={WHATSAPP_URL}
        className="btn-floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}