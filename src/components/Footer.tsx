const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="container-narrow section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-gradient">M V L I K</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Built with passion and precision.
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
