const HomePage = (props) => {
    return (

        
        <main className="holder">
        <div className="columnas">
            <div className="reqimg">
                <img className="traje" src="images/Requisitos.jpg" width={200} alt="Perro con Traje" />
            </div>
            <div className="requisitos">
                <h2>Requisitos de Adopcion:</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, sint eum? Officiis, aliquid
                    nobis debitis rem, quia quod facilis alias maxime, hic consectetur temporibus omnis dolore
                    consequuntur beatae aspernatur ab.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, sint eum? Officiis, aliquid
                    nobis debitis rem, quia quod facilis alias maxime, hic consectetur temporibus omnis dolore
                    consequuntur beatae aspernatur ab.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, sint eum? Officiis, aliquid
                    nobis debitis rem, quia quod facilis alias maxime, hic consectetur temporibus omnis dolore
                    consequuntur beatae aspernatur ab.</p>
            </div>
        </div>

        <h2>Preguntas frecuentes:</h2>
        <div class="container">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ¿De dónde provienen las mascotas que están publicadas en ésta web?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Todas las mascotas que recibimos en nuentro refugio son rescatadas.</strong> Son
                            animales que se encontraban en situaciones de calle, abandono o maltrato. Gracias al trabajo
                            del equipo, fundaciones y rescatistas logramos sayudarlas a recuperarse brindandoles un
                            hogar de tránsito y toda la atención de specialistas. Estas mascotas ya están preparadas
                            para iniciar una adaptación y poder integrar una nueva familia.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ¿Cómo me preparo para la llegada de mi mascota?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Primero tenes que saber que las mascotas necesitan un tiempo de adaptación, para
                                conocerte y conocer a todos los integrantes de la familia.</strong> Le va a llevar un
                            tiempo reconocer su nuevo hogar, así que paciencia, con amor pronto se sentirá comoda. Es
                            importante que te asesores con un veterinario para aprender sobre vacunas, cuál es el mejor
                            plan de desparasitación, y pueda recomendarte sobre la alimentación adecuada para ella.
                            Asegurate de contar con los elementos básicos para que esté comoda: una cuchita, o
                            colchoneta donde dormir, un platito para comer y tomar agua, una chapita o collar con tus
                            datos y su nombre, y si es un gatito piedritas y litera.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ¿Cuáles son los cuidados que debe recibir mi mascota?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Desparasitación, Vacunación, Alimentación. Todos procesos con los que te irás familiarizando
                            a lo largo de la vida de tu amigo peludo. Es muy importante que te acerques a un veterinario
                            que pueda recomendarte y enseñarte sobre las vacunas que necesita, cuándo aplicarlas, cómo
                            realizar una correcta desparacitación, según peso, hábitos, edad, y que alimento cubre las
                            necesidades de tu mascota.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>

        
    );
}

export default HomePage;