const Dibujo = () => {
    return (
      <div 
        className="relative w-full h-[calc(100vw*0.5625)] bg-cover bg-center" 
        style={{ backgroundImage: 'url(/Ale_y_yo.jpg)' }}
        id="dibujo"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          {/* Aquí puedes agregar tu contenido */}
        </div>
      </div>
    );
  };
  
  export default Dibujo;
  