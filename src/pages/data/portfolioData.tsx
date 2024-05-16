import ImageCaption from "../../components/imageCaption";

export interface PortfolioData {
    images: string[];
    title: string;
    description: JSX.Element;
}

let outdoorImages: PortfolioData = {
    images: [
        require('../../img/outdoor/a10.jpg'),
        require('../../img/outdoor/z4.jpg'),
        require('../../img/outdoor/z11.jpg'),
        require('../../img/outdoor/z27.jpg')
    ],
    title: 'Outdoor and Planting',
    description: (
        <div className='description-section'>
            <div className='description-box description-paragraph'>
                <div className='description-slogan'>
                    REAL AND ARTIFICIAL PLANTING - VISUALS AND LAYOUTS - FURNITURE - PLANTERS - PERGOLA’S AND ARCHWAY’S - MURALS AND DIGITAL ART - BRANDING
                </div>
                <p>Outside spaces have become an important part of hospitality. They can be seen as an extra room, which can be as colourful and interesting as your interior.</p>
                <p>I’m based in Manchester, but have worked all around the North West. </p>
            </div>
        </div>
    )
};

let tankImages: PortfolioData = {
    images: [
        require('../../img/tank/13.jpg'),
        require('../../img/tank/1.jpg'),
        require('../../img/tank/2.jpg'),
        require('../../img/tank/14.jpg'),
        require('../../img/tank/THE_TANK_ROOM-8642.jpg'),

    ],
    title: 'The Tank Room | Liverpool',
    description: (
        <div className='description-section'>
            <div className='description-box description-paragraph'> 
                <p>This was an amazing project to work on, with style is loosely based on the theme and decor a Budapest ruin bar. </p>
                <p>The general idea was to achieve a high impact, eclectic and colourful look, in a cost effective way.</p>
            </div>
            <img 
                className='description-box description-image'
                src={require('../../img/tank/before+tank.jpg')} 
                alt='before+tank.jpg'/>
        </div>
    )
};

let jamImages: PortfolioData = {
    images: [
        require('../../img/jam/w10.jpg'),
        require('../../img/jam/w3.jpg'),
        require('../../img/jam/w4.jpg'),
        require('../../img/jam/w8.jpg'),
        require('../../img/jam/w12.jpg'),
        require('../../img/jam/w14.jpg')
    ],
    title: 'The Jam Works | Droylsden',
    description: (
        <div className='description-section'>
            <div className='description-box description-paragraph'>
                <p>The one thing that stood out to me on this project was the owner's love of colour. We also discussed the need for more character and atmosphere in the space. </p>
                <p>A more cosy interior with a bright and vibrant colour scheme. This look is loosely based on speakeasy style, but with a colourful, modern and fun twist. </p>
            </div>
            <img className='description-box description-image' src={require('../../img/jam/w+b+1.jpg')} alt='w+b+1.jpg'/>
        </div>
    )
};

let nestImages: PortfolioData = {
    images: [
        require('../../img/nest/z57.jpg'),
        require('../../img/nest/z58.jpg'),
        require('../../img/nest/z59.jpg'),
        require('../../img/nest/z60.jpg'),
        require('../../img/nest/z63.jpg'),
    ],
    title: 'The Nest | Blackpool',
    description: (
        <div className='description-section'>
            <div className='description-box description-paragraph'>
                <p>The Nest is a very Instagram friendly B&B in Blackpool. </p>
                <p>The brief was to make it appealing to a a wide demographic, a young relaxing party pad that would also work for young families. </p>
                <p>Using colour blocking techniques to add interest and concealed lighting for a more modern look.</p>
            </div>
        </div>
    )
};

let dukesImages: PortfolioData = {
    images: [
        require('../../img/dukes/d.jpg'),
        require('../../img/dukes/a.jpg'),
        require('../../img/dukes/b.jpg'),
        require('../../img/dukes/c.jpg'),
    ],
    title: 'The Dukes Head',
    description: (
        <div className='description-section'>
            <div className='description-box'>
                <p>Situated in the loft space, with this project I had the chance to create a new function room. </p>
                <img className='description-image' src={require('../../img/dukes/before.jpg')} alt='before.jpg'/>
            </div>
           <div className='description-box description-paragraph'>
                <p>A fantastic space with a double height ceiling and exposed beams. </p>
                <p>Bold colours and new artworks of former Dukes of York throughout history helped breate new life into this interesting space.</p>
                <img className='description-image' src={require('../../img/dukes/plan+jpg.jpg')} alt='plan+jpg.jpg'/>
            </div>
        </div>
    )
};

let pbmImages: PortfolioData = {
    images: [
        require('../../img/pbm/10.jpg'),
        require('../../img/pbm/14.jpg'),
        require('../../img/pbm/15.jpg'),
        require('../../img/pbm/11.jpg'),
        require('../../img/pbm/12.jpg')
    ],
    title: 'Peaky Blinders Bar | Manchester',
    description: (
    <div className="description-section">
        <div className="description-box description-paragraph">
            <p>
                The brief was to design a vintage style bar to reflect the era that the well known TV series was set in.
            </p>
            <p>
            This was a large project over two floors and included three VIP themed rooms.
            </p>
            <ul>
                <li>The Italian Suite</li>
                <li>The Drawing Room</li>
                <li>The Gypsy Parlour</li>
            </ul>
            <p>
                Wood panelling, vintage style lighting, furniture and wall coverings all achieved a more cohesive period look. 
            </p>
        </div>
        <img className='description-box description-image' src={require('../../img/pbm/Screenshot+2021-05-17+at+11.54.59.jpg')} alt='Screenshot+2021-05-17+at+11.54.59.jpg'/>
    </div>)
};


export {
    outdoorImages, 
    pbmImages,
    tankImages,
    jamImages,
    nestImages,
    dukesImages,
};