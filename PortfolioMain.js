reportWindowSize();

function Home() {
    document.getElementById('HomePage').style.display = "block";
    document.getElementById('AboutMePage').style.display = "none";
    document.getElementById('ProjectsPage').style.display = "none";
    document.getElementById('ContactPage').style.display = "none";
    document.getElementById('BiographyPage').style.display = "none";
    if(window.innerWidth < 420) {
        document.getElementById('footer').style.bottom = null;
    }
}

function AboutMe() {
    document.getElementById('HomePage').style.display = "none";
    document.getElementById('AboutMePage').style.display = "block";
    document.getElementById('ProjectsPage').style.display = "none";
    document.getElementById('ContactPage').style.display = "none";
    document.getElementById('BiographyPage').style.display = "none";
    if(window.innerWidth < 420) {
        document.getElementById('footer').style.bottom = "-190px";
    }
}

function Projects() {
    document.getElementById('HomePage').style.display = "none";
    document.getElementById('AboutMePage').style.display = "none";
    document.getElementById('ProjectsPage').style.display = "block";
    document.getElementById('ContactPage').style.display = "none";
    document.getElementById('BiographyPage').style.display = "none";
    if(window.innerWidth < 500) {
        document.getElementById('footer').style.bottom = "0px";
    }
}

function Contact() {
    document.getElementById('HomePage').style.display = "none";
    document.getElementById('AboutMePage').style.display = "none";
    document.getElementById('ProjectsPage').style.display = "none";
    document.getElementById('ContactPage').style.display = "block";
    document.getElementById('BiographyPage').style.display = "none";
    if(window.innerWidth < 420) {
        document.getElementById('footer').style.bottom = "-230px";
    }
}

function ShowBiography() { 
    document.getElementById('AboutMePage').style.display = "none";
    document.getElementById('BiographyPage').style.display = "block";
    if(window.innerWidth < 420) {
        document.getElementById('footer').style.bottom = "-350px";
    }
}

function HideBiography() {
    document.getElementById('BiographyPage').style.display = "none";
    document.getElementById('AboutMePage').style.display = "block";
    if(window.innerWidth < 420) {
        document.getElementById('footer').style.bottom = "-190px";
    }
}

function ShowSettings() {
    var elements = document.getElementsByClassName('Buttons');
    if (elements[0].style.display === "inline"){
        for (var i=0;i<elements.length;i+=1){
            elements[i].style.display = 'none';
          }
    } else {
        for (var i=0;i<elements.length;i+=1){
            elements[i].style.display = 'inline';
          }
    }
}

function ToggleFacebook() {
    var win = window.open('https://www.facebook.com/profile.php?id=100009648007816', '_blank');
    win.focus();
}

function ToggleGmail() {
    if(window.innerWidth < 1200) {
        document.getElementById('GmailContact').style.fontSize = "70%";
    } else {
        document.getElementById('GmailContact').style.fontSize = "100%";
    }
    if(document.getElementById('GmailContact').innerHTML === "Kliknij aby zobaczyć" || document.getElementById('GmailContact').innerHTML === "Click to view") {
        if(window.innerWidth < 1200) {
            document.getElementById('GmailContact').innerHTML = "rozuliony2@gmail.com";
            if(window.innerWidth < 930) {document.getElementById('GmailContact').innerHTML = "rozuliony2 @gmail.com";}
        } else {
            document.getElementById('GmailContact').innerHTML = "rozuliony2@gmail.com";
        }
    } else if (document.getElementById('GmailContact').innerHTML === "rozuliony2@gmail.com" && document.getElementById('Home').innerHTML === "Home"){
        document.getElementById('GmailContact').innerHTML = "Click to view";
    } else if (document.getElementById('GmailContact').innerHTML === "rozuliony2@gmail.com" && document.getElementById('Home').innerHTML === "Główna") {
        document.getElementById('GmailContact').innerHTML = "Kliknij aby zobaczyć";
    } else if (document.getElementById('GmailContact').innerHTML === "rozuliony2 @gmail.com" && document.getElementById('Home').innerHTML === "Home"){
        document.getElementById('GmailContact').innerHTML = "Click to view";
    } else if (document.getElementById('GmailContact').innerHTML === "rozuliony2 @gmail.com" && document.getElementById('Home').innerHTML === "Główna") {
        document.getElementById('GmailContact').innerHTML = "Kliknij aby zobaczyć";
    }
}

function TogglePhone() {
    if(document.getElementById('PhoneContact').innerHTML === "Kliknij aby zobaczyć" || document.getElementById('PhoneContact').innerHTML === "Click to view") {
        document.getElementById('PhoneContact').innerHTML = "721 533 362";
    } else if (document.getElementById('PhoneContact').innerHTML === "721 533 362" && document.getElementById('Home').innerHTML === "Home"){
        document.getElementById('PhoneContact').innerHTML = "Click to view";
    } else {
        document.getElementById('PhoneContact').innerHTML = "Kliknij aby zobaczyć";
    }
}

function DarkTheme() {
    localStorage.removeItem("Theme", "Light");
    localStorage.setItem("Theme", "Dark");
    const Clouds = document.querySelectorAll('.Cloud');
    const Stars = document.querySelectorAll('.Stars');
    document.getElementById('BiographyContent').style.color = "white";
    document.getElementsByClassName('Headings')[0].style.color = "white";
    document.getElementsByClassName('Headings')[1].style.color = "white";
    document.getElementsByClassName('Headings')[2].style.color = "white";
    document.getElementsByClassName('Headings')[3].style.color = "white";
    document.getElementById('Body').className = "BodyDTheme";
    document.getElementById('ActualBody').className = "ActualBodyDTheme";
    document.getElementById('Sun').style.visibility = "hidden";
    document.getElementById('Moon').style.visibility = "visible";
    Clouds.forEach(Clouds => {
        Clouds.style.visibility = "hidden";
      });
    Stars.forEach(Stars => {
        Stars.style.visibility = "visible";
      });
    document.getElementById('TextAboutMe').style.color = "#FF6400";
}

function LightTheme() {
    localStorage.removeItem("Theme", "Dark");
    localStorage.setItem("Theme", "Light");
    const Clouds = document.querySelectorAll('.Cloud');
    const Stars = document.querySelectorAll('.Stars');
    document.getElementsByClassName('Headings')[0].style.color = "black";
    document.getElementsByClassName('Headings')[1].style.color = "black";
    document.getElementsByClassName('Headings')[2].style.color = "black";
    document.getElementsByClassName('Headings')[3].style.color = "black";
    document.getElementById('BiographyContent').style.color = "black";
    document.getElementById('Sun').style.visibility = "visible";
    document.getElementById('Moon').style.visibility = "hidden";
    document.getElementById('Body').className = "BodyLTheme";
    document.getElementById('ActualBody').className = "ActualBodyLTheme";
    Clouds.forEach(Clouds => {
        Clouds.style.visibility = "visible";
      });
    Stars.forEach(Stars => {
        Stars.style.visibility = "hidden";
      });
    document.getElementById('TextAboutMe').style.color = "black";
}

function EngLang() {
    localStorage.removeItem("Jezyk", "Pol");
    localStorage.setItem("Jezyk", "Eng");
    document.getElementById('Home').innerHTML = "Home";
    document.getElementById('AboutMe').innerHTML = "About Me";
    document.getElementById('Projects').innerHTML = "Projects";
    document.getElementById('Contact').innerHTML = "Contact";
    document.getElementById('LightTheme').innerHTML = "Light Theme";
    document.getElementById('DarkTheme').innerHTML = "Dark Theme";
    document.getElementById('EngLang').innerHTML = "English";
    document.getElementById('PolLang').innerHTML = "Polish";
    document.getElementById('FirstClipText').innerHTML = "Welcome to my website, here you will find information about me, my projects and contact to me 😀";
    document.getElementById('SecondClipText').innerHTML = "At the top of the screen you can change the theme of the site according to your own preferences to dark or light, there is also an option to change the language from Polish to English and vice versa 🏴󠁧󠁢󠁥󠁮󠁧󠁿";
    document.getElementById('ThirdClipText').innerHTML = 'On this page you will find 4 tabs, currently you are on one of them, that is the "Main Page", here are general information and introduction to the site 🙃';
    document.getElementById('FourthClipText').innerHTML = 'In the "About Me" tab you will find information about me, such as a biography in the link, a brief introduction and the skills I have acquired or recently learned, after all, I m just learning 😏';
    document.getElementById('FifthClipText').innerHTML = 'The third tab is "Projects", there are basic sites or work I have done, through which I trained and developed, over time I will try to develop the level of sophistication of new sites, although the first approaches may be quite simple 😴.';
    document.getElementById('SixthClipText').innerHTML = 'The last tab, which will be useful to you if you are interested in my work is "Contact", rather needless to explain - there you will find available social networks, ways to contact me by phone or email, for example.';
    document.getElementById('Skills').style.padding = "5% 50% 5% 42%";
    document.getElementById('Skills').innerHTML = "SKILLS";
    document.getElementsByClassName('Heading')[0].innerHTML = "Biography";
    document.getElementsByClassName('Heading')[1].innerHTML = "Interests";
    document.getElementById('BiographyLink').innerHTML = "If you want to read more Click Here";
    document.getElementById('BiographyUnLink').innerHTML = "Return to previous page";
    document.getElementById('FacebookText').innerHTML = "You can send me a friend invitation on Facebook, preferably if you write a message so that I know if it is not a random person, I will definitely reply quickly.";
    document.getElementById('GmailText').innerHTML = "You can also send me a message on Gmail, I look there rather rarely, but I am sure, that sooner or later I will read your message.";
    document.getElementById('PhoneText').innerHTML = "You can also send me a text message at this number, calling me doesn't always work - after all, a lot of calls are commercials that no one wants to deal with or I simply don't have the opportunity to answer. An SMS message will certainly be read and answered quickly.";
    document.getElementById('FBContact').innerHTML = "Click to move to my profile";
    document.getElementById('GmailContact').innerHTML = "Click to view";
    document.getElementById('PhoneContact').innerHTML = "Click to view";
    document.getElementById('TextAboutMe').innerHTML = "My name is Maciej and I am starting my adventures with websites. I graduated from high school in the profession of Programming Technician. What I was up against, you will see below. Since I was a child I liked to spend time at the computer, at first I limited it mainly to gaming, but as time went by I also started to be interested in programming, scripting, playing with graphics or editing videos. I won't elaborate here, if I interest you then go to the link below and read a more detailed story 😉.";
    document.getElementById('EmbedTitle1').innerHTML = "To-Do List Page";
    document.getElementById('EmbedText1').innerHTML = "On this page built from scratch you will find the usual to-do list, which of course saves the data for the user, when you return you will find the same tasks there.";
    document.getElementById('Incoming').innerHTML = "New projects will be built here soon 😅";
    document.getElementById('Text1').innerHTML = "I'm interested in movies or TV series of various themes";
    document.getElementById('Text2').innerHTML = "I love to play games, especially the action and survival genre";
    document.getElementById('Text3').innerHTML = "I also enjoy walking, regardless of the weather or temperature";
    document.getElementById('Text4').innerHTML = "Since childhood I have been in contact with pets, which I often play with";
    document.getElementById('Text5').innerHTML = "In my free time I like to listen to music, usually anything that catches my ear";
    document.getElementById('BiographyContent').innerHTML = "Born in 2003, I live in a tiny village that has one church and now only one store. I went to school in a town a few kilometers away, which meant that I always commuted by bus, and in addition, being in the first grades, I had to wait for my older sister so that I wouldn't go back through the village alone, and I spent a good part of my time at school. The computer I had at home was a communion gift for my sister, and I played many online games on it until I downloaded the famous Minecraft and spent many long years there, later switching to shooters still.  At the beginning of my education, I was not very eager to learn, and my grades were rather average. However, as the going got tougher, surprisingly better grades began to appear, and in my last year of elementary school I even earned an honorable mention certificate, for which my parents invested in a computer for me and I was able to switch to newer games like CS:GO. In middle school, I made more friends, but I also had to put some effort in already. I hardly ever went out with friends, which meant that my only activity was on the computer: music, games, watching movies, and playing with people from the Internet. I helped my parents a lot, did a lot of chores around the house, had my own chores and often played with our pets. Along with graduating from middle school and getting positive results from the middle school exam. I separated myself from the rest, going to a technical school in another city with only one person I knew. There I began to study programming and learned many things from websites to window or mobile applications. I passed my driver's license the second time around, and worked for a company over the summer, making up for my own expenses, such as the car I bought a year later.  I passed the INF.03 and INF.04 vocational exams, and began to study on my own at home, on the computer, to prepare for possible future work. In the last year before high school graduation, I found that I was taking up websites, and that's how what you just saw came to be....";
    document.getElementById('footer').innerHTML = "All this site as well as designs are created from scratch, without any design software or copied ready-made templates. The site will probably be improved it is created in a fast time and is not yet finished, only possible already.";
}

function PolLang() {
    localStorage.removeItem("Jezyk", "Eng");
    localStorage.setItem("Jezyk", "Pol");
    document.getElementById('Home').innerHTML = "Główna";
    document.getElementById('AboutMe').innerHTML = "O mnie";
    document.getElementById('Projects').innerHTML = "Projekty";
    document.getElementById('Contact').innerHTML = "Kontakt";
    document.getElementById('LightTheme').innerHTML = "Jasny Motyw";
    document.getElementById('DarkTheme').innerHTML = "Ciemny Motyw";
    document.getElementById('EngLang').innerHTML = "Angielski";
    document.getElementById('PolLang').innerHTML = "Polski";
    document.getElementById('FirstClipText').innerHTML = "Witaj na mojej stronie, znajdziesz tutaj informacje o mnie, moje projekty oraz kontakt do mnie 😀";
    document.getElementById('SecondClipText').innerHTML = "Na górze ekranu możesz zmienić motyw strony zgodnie z własnymi preferencjami na ciemny lub jasny, jest tam również opcja zmiany języka z polskiego na angielski i na odwrót 🏴󠁧󠁢󠁥󠁮󠁧󠁿";
    document.getElementById('ThirdClipText').innerHTML = "Na tej stronie znajdziesz 4 zakładki, obecnie znajdujesz się na jednej z nich, czyli na 'Głównej Stronie', są tutaj ogólne informacje i wstęp do strony 🙃";
    document.getElementById('FourthClipText').innerHTML = 'W zakładce "O mnie" znajdziesz informacje odnośnie mojej osoby, takie jak biografia w odnośniku, krótkie przedstawienie i umiejętności, które nabyłem lub niedawno poznałem, w końcu dopiero się uczę 😏';
    document.getElementById('FifthClipText').innerHTML = 'Trzecia zakładka to "Projekty", znajdują się tam wykonane przeze mnie podstawowe strony czy pracę, dzięki którym szkoliłem się i rozwijałem, z czasem postaram się zwiększyć poziom zaawansowania nowych stron, aczkolwiek pierwsze podejścia mogą być dość proste 😴';
    document.getElementById('SixthClipText').innerHTML = 'Ostatnia zakładka, która ci się przyda, jeśli zainteresuje Cię moja praca to "Kontakt", raczej nie trzeba tłumaczyć - znajdziesz tam dostępne portale społecznościowe, sposoby kontaktu ze mną przez np. telefon czy email';
    document.getElementById('Skills').style.padding = "5% 50% 5% 34%";   
    document.getElementById('Skills').innerHTML = "UMIEJĘTNOŚCI";
    document.getElementsByClassName('Heading')[0].innerHTML = "Biografia";
    document.getElementsByClassName('Heading')[1].innerHTML = "Zainteresowania";
    document.getElementById('BiographyLink').innerHTML = "Jeśli chcesz poczytać więcej Kliknij tutaj";
    document.getElementById('BiographyUnLink').innerHTML = "Wróć do poprzedniej strony";
    document.getElementById('FacebookText').innerHTML = "Możesz wysłać mi zaproszenie do znajomych na Facebooku, najlepiej jeśli napiszesz wiadomość, abym wiedział czy to nie przypadkowa osoba, na pewno szybko odpowiem.";
    document.getElementById('GmailText').innerHTML = "Możesz też wysłać mi wiadomość na pocztę Gmail, zaglądam tam raczej rzadko, ale jestem pewien, że prędzej czy później odczytam twoją wiadomość.";
    document.getElementById('PhoneText').innerHTML = "Możesz również wysłać mi SMSa pod ten numer, zadzwonienie do mnie nie zawsze za skutkuje - w końcu mnóstwo połączeń to reklamy, z którymi nikt nie chce mieć do czynienia lub zwyczajnie nie mam możliwości odebrać. Wiadomość SMS z pewnością szybko odczytam i na nią odpowiem.";
    document.getElementById('FBContact').innerHTML = "Kliknij aby przenieść się do mojego profilu";
    document.getElementById('GmailContact').innerHTML = "Kliknij aby zobaczyć";
    document.getElementById('PhoneContact').innerHTML = "Kliknij aby zobaczyć";
    document.getElementById('TextAboutMe').innerHTML = "Mam na imię Maciej i zaczynam swoje przygody ze stronami internetowymi. Ukończyłem szkołę średnią w zawodzie Technik Programista. To, z czym się mierzyłem, zobaczysz poniżej. Od dziecka lubiłem spędzać czas przy komputerze, na początku ograniczałem to głównie do grania, jednak w miarę z biegem czasu zacząłem również interesować się programowaniem, skryptami, zabawą grafiką czy montażem filmów. Nie będę się rozpisywał tutaj, jeśli Cię zainteresuję to wejdź w link poniżej i przeczytaj dokładniejszą historię 😉";
    document.getElementById('EmbedTitle1').innerHTML = "Strona z tworzeniem zadań";
    document.getElementById('EmbedText1').innerHTML = "Na tej stronie zbudowanej od zera znajdziesz zwykłą listę zadań do zrobienia, która oczywiście zpaisuje dane dla użytkownika, po powróceniu znajdziesz tam te same zadania.";
    document.getElementById('Incoming').innerHTML = "Tu wkrótce powstaną nowe projekty 😅";
    document.getElementById('Text1').innerHTML = "Interesują mnie filmy czy seriale o różnej tematyce";
    document.getElementById('Text2').innerHTML = "Uwielbiam grać w gry, szczególnie gatunku akcji oraz survival";
    document.getElementById('Text3').innerHTML = "Lubię również spacerować, niezależnie od pogody czy temperatury";
    document.getElementById('Text4').innerHTML = "Od dziecka mam kontakt ze zwierzętami domowymi, z którymi często się bawię";
    document.getElementById('Text5').innerHTML = "W wolnym czasie lubię słuchać muzyki, zazwyczaj wszystkiego, co wpadnie mi w ucho";
    document.getElementById('BiographyContent').innerHTML = "Urodziłem się w 2003 roku, mieszkam w malutkiej wsi, która ma jeden kościół i obecnie tylko jeden sklep. Chodziłem do szkoły w miasteczku parę kilometrów dalej, przez co zawsze dojeżdżałem autobusem, a w dodatku, będąc w pierwszych klasach, musiałem czekać na starszą siostrę, abym nie wracał sam przez wieś i sporą część czasu spędzałem w szkole. Komputer, który miałem w domu był komunijnym prezentem dla siostry, grałem na nim w wiele gier internetowych, aż pobrałem słynnego Minecrafta i tam spędziłem wiele długich lat, później przerzucając się jeszcze na strzelanki.  Na początku edukacji nie byłem zbyt chętny do nauki, a oceny były raczej średnie. Z czasem jednak, gdy robiło się trudniej, o dziwo zaczęły pojawiać się lepsze oceny, a w ostatniej klasie podstawówki zdobyłem nawet świadectwo z wyróżnieniem, za które rodzice zainwestowali w komputer dla mnie i mogłem przerzucić się na nowsze gry typu CS:GO. W gimnazjum zdobyłem więcej znajomych, ale i musiałem już się trochę przyłożyć. Mało razy wychodziłem na spotkania ze znajomymi, przez co jedynym zajęciem był komputer: muzyka, gry, oglądanie filmów, a także granie z ludźmi z internetu. Dużo pomagałem rodzicom, wykonywałem wiele prac w domu, miałem swoje obowiązki i często bawiłem się z naszymi zwierzętami domowymi. Razem ze skończeniem gimnazjum i pozytywnymi wynikami z egzaminu gimnazjalnego. Odłączyłem się od reszty, idąc do technikum w innym mieście z jedynie jedną znajomą mi osobą. Zacząłem tam kształcić się w kierunku programistyki i uczyłem się wielu rzeczy od stron internetowych aż po aplikacje okienkowe czy mobilne. Zdałem prawo jazdy za drugim razem, przez wakacje pracowałem w firmie, dorabiająć na własne wydatki, jak na przyklad zakupiony samochód rok później.  Zdałem egzaminy zawodowe INF.03 i INF.04, zacząłem również samemu douczać się w domu, przy komputerze, aby przygotować się do możliwej przyszłej pracy. W ostatnim roku przed maturą stwierdziłem, że biorę się za strony internetowe i w taki sposób powstało to, co właśnie widzisz...";
    document.getElementById('footer').innerHTML = "Cała ta strona jak i projekty są tworzone od podstaw, bez żadnych programów do projektowania czy skopiowanych gotowych szablonów. Strona będzie pewnie ulepszana jest ona stworzona w szybkim czasie i jeszcze nie jest skończona, a jedynie możliwa już do użytku.";
}

window.addEventListener("resize", reportWindowSize);

function reportWindowSize() {
    if(localStorage.getItem("Jezyk") === "Pol") {
        PolLang();
    } else if (localStorage.getItem("Jezyk") === "Eng") {
        EngLang();
    }
    if(localStorage.getItem("Theme") === "Light") {
        LightTheme();
    } else if (localStorage.getItem("Theme") === "Dark") {
        DarkTheme();
    }
    let value = window.innerWidth;
    let scrollvalue = window.scrollY;
    const ContainersText = document.querySelectorAll('.ContainerText');
    const ButtonsContent = document.querySelectorAll('.Buttons-Content');
    if(value > 650) {document.getElementById('BiographyText').style.marginTop = value * 0.03 + "px";    document.getElementById('footer').style.bottom = null;}
    else{document.getElementById('BiographyText').style.marginTop = "15%";}
    if (value < 420) {document.getElementById('BiographyText').style.marginTop = "70%";document.getElementById('BiographyText').style.marginLeft = "20%";}
    if(document.getElementById('Home').innerHTML === "Główna") {
        document.getElementById('GmailContact').innerHTML = "Kliknij aby zobaczyć";
        document.getElementById('PhoneContact').innerHTML = "Kliknij aby zobaczyć";
    } else {
        document.getElementById('GmailContact').innerHTML = "Click to view";
        document.getElementById('PhoneContact').innerHTML = "Click to view";
    }
    if(value < 900) {
        document.getElementsByClassName('Cloud')[0].style.left = -200 + scrollvalue * -0.9 + "px";
        document.getElementsByClassName('Cloud')[1].style.right = -250 + scrollvalue * -0.6 + "px";
        document.getElementsByClassName('Cloud')[2].style.right = -250 + scrollvalue * -0.6 + "px";
        document.getElementsByClassName('Cloud')[3].style.left = -250 + scrollvalue * -0.5 + "px";
        document.getElementsByClassName('Cloud')[4].style.right = -250 + scrollvalue * -0.3 + "px";
        ButtonsContent.forEach(ButtonsContent => {
        ButtonsContent.style.fontSize = value * 0.03 + "px";
      });} else {
        document.getElementsByClassName('Cloud')[0].style.left = -500 + scrollvalue * -0.9 + "px";
        document.getElementsByClassName('Cloud')[1].style.right = -500 + scrollvalue * -0.6 + "px";
        document.getElementsByClassName('Cloud')[2].style.right = -500 + scrollvalue * -0.6 + "px";
        document.getElementsByClassName('Cloud')[3].style.left = -500 + scrollvalue * -0.5 + "px";
        document.getElementsByClassName('Cloud')[4].style.right = -500 + scrollvalue * -0.4 + "px";
        ButtonsContent.forEach(ButtonsContent => {
            ButtonsContent.style.fontSize = "170%";
          });
      }
     if(value < 1051 && value > 420) {
        document.getElementById('FBContact').style.fontSize = "70%";
        document.getElementById('GmailContact').style.fontSize = "80%";
        document.getElementById('PhoneContact').style.fontSize = "80%";
        if(value < 800) {
            ContainersText.forEach(ContainersText => {
                ContainersText.style.fontSize = '2vw';
          });}
    } else if (value < 420) {
        document.getElementById('GmailContact').style.fontSize = "60%";
        document.getElementById('PhoneContact').style.fontSize = "60%";
    } else if (value > 1051) {
        document.getElementById('FBContact').style.fontSize = "100%";
        document.getElementById('GmailContact').style.fontSize = "100%";
        document.getElementById('PhoneContact').style.fontSize = "100%";
        document.getElementById('FBContact').style.padding = "2%";
        ContainersText.forEach(ContainersText => {
            ContainersText.style.fontSize = '1.49vw';
          });
    } if (value > 1200) {
        document.getElementsByClassName('Buttons')[0].style.padding = "3vh";
        document.getElementsByClassName('Buttons')[1].style.padding = "3vh";
    } else {
        document.getElementsByClassName('Buttons')[0].style.padding = "2vh";
        document.getElementsByClassName('Buttons')[1].style.padding = "2vh";
    } if (value < 420) {
        document.getElementById('FBContact').style.fontSize = "50%";
    }

  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  window.addEventListener('scroll', () => {
    let scrollvalue = window.scrollY;
    let value = window.innerWidth;
    if(window.innerWidth > 900) {
        document.getElementsByClassName('Cloud')[0].style.left = -500 + scrollvalue * -0.9 + "px";
        document.getElementsByClassName('Cloud')[1].style.right = -500 + scrollvalue * -0.6 + "px";
        document.getElementsByClassName('Cloud')[2].style.right = -500 + scrollvalue * -0.6 + "px";
        document.getElementsByClassName('Cloud')[3].style.left = -500 + scrollvalue * -0.5 + "px";
        document.getElementsByClassName('Cloud')[4].style.right = -500 + scrollvalue * -0.4 + "px";
    } else {
        document.getElementsByClassName('Cloud')[0].style.left = -250 + scrollvalue * -0.9 + "px";
        document.getElementsByClassName('Cloud')[1].style.right = -250 + scrollvalue * -0.6 + "px";
        document.getElementsByClassName('Cloud')[2].style.right = -250 + scrollvalue * -0.6 + "px";
        document.getElementsByClassName('Cloud')[3].style.left = -250 + scrollvalue * -0.5 + "px";
        document.getElementsByClassName('Cloud')[4].style.right = -250 + scrollvalue * -0.4 + "px";
    }
})

var img1 = document.getElementById('Img1');
var img2 = document.getElementById('Img2');
var img3 = document.getElementById('Img3');
var img4 = document.getElementById('Img4');
var img5 = document.getElementById('Img5');

img1.addEventListener("mouseover", () => {
    document.getElementById('Text1').style.visibility = "visible";
});
img1.addEventListener("mouseout", () => {
    document.getElementById('Text1').style.visibility = "hidden";
});
img2.addEventListener("mouseover", () => {
    document.getElementById('Text2').style.visibility = "visible";
});
img2.addEventListener("mouseout", () => {
    document.getElementById('Text2').style.visibility = "hidden";
});
img3.addEventListener("mouseover", () => {
    document.getElementById('Text3').style.visibility = "visible";
});
img3.addEventListener("mouseout", () => {
    document.getElementById('Text3').style.visibility = "hidden";
});
img4.addEventListener("mouseover", () => {
    document.getElementById('Text4').style.visibility = "visible";
});
img4.addEventListener("mouseout", () => {
    document.getElementById('Text4').style.visibility = "hidden";
});
img5.addEventListener("mouseover", () => {
    document.getElementById('Text5').style.visibility = "visible";
});
img5.addEventListener("mouseout", () => {
    document.getElementById('Text5').style.visibility = "hidden";
});

