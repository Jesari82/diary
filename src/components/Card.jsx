const Card = () => {
    return (
        <li class="card flex mt-1 border rounded-lg border-gray-300 p-3">
            <div class="py-10">
                <time datetime="2024-06-25">25.06.2024</time>
            </div>
            <div class="py-10 pl-10">
                <h2>Titel von Eintrag 2</h2>
            </div>
            <div class="pl-10">
                <img src="https://picsum.photos/100?random=1" alt="Bild2" />
            </div>
        </li>
    );
  };
  
  export default Card;  // Don't forget to export the component!
