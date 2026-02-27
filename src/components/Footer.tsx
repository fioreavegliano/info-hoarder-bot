const Footer = () => {
  return (
    <footer id="contacto" className="dark-section py-12">
      <div className="container text-center">
        <h2 className="text-2xl font-heading font-bold mb-2">MAQUINARIA CNC S.A.</h2>
        <p className="text-industrial-dark-foreground/60 text-sm mb-6">
          Corte y Deformación de chapa
        </p>
        <div className="section-separator mb-6" />
        <p className="text-industrial-dark-foreground/50 text-xs">
          © {new Date().getFullYear()} Maquinaria CNC S.A. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
