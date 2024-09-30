import React from 'react';

function About() {
    return (
        <>
            <h1 style={{ color: 'red' }}>some important info</h1>
            <p style={{ color: 'red' }}> hello, im tony and this is my business cards app, as you can see its missing some things and is unfinished, i did all i could to try and finish it in time but it didnt manage to find the time to fully finish it, i'll list some things that dont work completely or things that have issues</p>
            <ul style={{ color: 'red' }}>
                <li>when you press the cards that should lead you to the cards info you'll get an undefined page, i couldn't find out why it was happening.</li>
                <li>when you register in this site the data will be saved but noting will change and you wont be able to logout but you can check that the data is saved if you login from a site that uses the same api or just look at the console when you register.</li>
                <li>as you would guess you can't create a new card nor edit the user.</li>
                <p style={{ color: 'green', fontSize: '1.3em' }}>but other than that most other things work if im not forgeting anything, theme toggle works as well as the live seach filter, and the max amount of cards for each page is 9 separated to 17 pages to make it more plesant. THAT'S it i hope i didn't forget anything and thanks for checking it out. </p>
            </ul>
            <h1>about t-card</h1>
            <p>welcome to t-card out top priority is to be your solution for managing business cards, this site was made and designed to be your center to all kinds of business from all sizes
            </p>
            <h1>what do we offer our users?</h1>
            <h3>Browse</h3>
            <p>looking for a business? in t-card you can find a wide range of business, and with our seemless and efficient app that helps you find exactly what YOU'RE looking for
            </p>
            <h3>Create</h3>
            <p>
                create and design your business card within our app, with the use of our advanced tools to make the exreance as smooth as possible
            </p>
            <h3>CRM for Admins</h3>
            <p>
                Our comprehensive CRM features enable admins to manage business card data, users data, and maintain valuable business relationships. Stay on top of your networking game with advanced analytics and reporting tools.
            </p>

            <h1>our mission</h1>
            <p>t-card strives to improve the way you manage/ find business by simplifying and making it as user-friendly as possible while giving you access to advanced tools to help you create your uniqe business cards and manage them with ease
            </p>
            <h3>contact us</h3>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center' }}>

                <a href="">Email: Tcard@gmail.com</a>
                <a href="">Phone: 122-765-0853</a>
                <a href="">Address: 1234 Bcard st, mega city, uganda</a>

            </div>
        </>
    )
}

export default About;