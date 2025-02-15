
function Home (){
    return(
        <div className="home text-center">
            <h1 className="text-4xl font-black">IEEE Tunisian Student <br />and Young <br />Professional <br />
            <span className="active">12th Edition</span></h1>
            <h2 className="font-bold">22, 23, 24 december 2024</h2>
            <h2>Medina Congress Center, Yasmine Hammamet</h2>
            <h2 className="font-bold text-2xl">Our Journey is done</h2>
            <h2 className="active font-bold text-2xl">Congratulations to</h2>
            <h2 className=" font-black text-2xl">IEEE ENIS Student Branch.</h2>
            <div className="flex justify-center gap-x-4 active">
                <div className="participants">
                    <p className="font-black">1200+</p>
                    <p>Participants</p>
                </div>
                <div className="speakers">
                    <p className="font-black">50+</p>
                    <p>Speakers</p>
                </div>
            </div>
        </div>
    )
}
export default Home;