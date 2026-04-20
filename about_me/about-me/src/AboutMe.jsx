import "./AboutMe.css"
import img from './assets/cute-fish.webp'

export function AboutMe(){
    return (
        <article className="article">
            <img className="img" src={img} alt="About Me Image"/>
            <div className="div">
                <h2 className="title">About Me</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis lorem sit amet velit rutrum varius. Sed est est, volutpat ut tortor id, fringilla ultricies nisl. Mauris ac condimentum ipsum, in venenatis purus. Aliquam nulla quam, auctor suscipit nunc eget, dignissim mattis leo. Ut tincidunt vestibulum quam, vulputate ornare ipsum euismod id. Morbi eu consectetur magna, in tempus sem. Sed maximus, nunc et dictum lacinia, sapien nunc euismod purus, in dapibus est nisi vitae dui. Cras consequat at ex commodo luctus. Phasellus consequat, libero eget faucibus consequat, nibh est convallis lacus, efficitur consectetur tortor tortor eu tellus. Nunc maximus libero mi, ut tristique sem efficitur id. Quisque ac ante risus. Fusce ultricies tempus semper. Praesent posuere, mi ac sodales placerat, est eros pulvinar turpis, id dignissim nulla ex rhoncus diam. Donec quis eros vel urna consequat lobortis ut at nulla. Suspendisse potenti.</p>
            </div>
        </article>
    )
}