import ImageCaption from "../../components/imageCaption";

export interface PortfolioData {
    images: string[];
    title: string;
    description: JSX.Element;
}

let outdoorImages: PortfolioData = {
    images: [
        require('../../img/outdoor/a10.jpg')
    ],
    title: 'Outdoor and Planting',
    description: <div></div>
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
    description: <div>'This was an amazing project to work in, the style is loosely based on a Budapest ruin bar. The general idea is to have a high impact eclectic colourful look, achieved in a cost effective way.'</div>
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
    description: <div>'The one thing that stood out to me on this project was the owners love of colour, but we also discussed that the space needed character and atmosphere. A more cosy interior. This look is loosely based on a speakeasy bar, but wuth a colourful, modern and fun twist.'</div>
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
    description: <div>'Instagram friendly B&B in Blackpool. The brief was to make it appealing to a a wide demographic, a young relaxing party pad that would also work for young families using colour blocking techniques to add interest and concealed lighting for a more modern look.'</div>
};

let dukesImages: PortfolioData = {
    images: [
        require('../../img/dukes/d.jpg'),
        require('../../img/dukes/a.jpg'),
        require('../../img/dukes/b.jpg'),
        require('../../img/dukes/c.jpg'),
    ],
    title: 'The Dukes Head',
    description: <div>'Situated in the loft space, I had the chance to create a new function room. A fantastic space witha double height ceiling and exposed beams. Bold colours and new art works of all the Dukes of York helped breate new life into this interesting space.'</div>
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
    <div>
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
        
        <img src={require('../../img/pbm/Screenshot+2021-05-17+at+11.54.59.jpg')} />
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