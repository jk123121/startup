const playerNameEl = document.querySelector('.player-name');
let numPlayers = 1;

if (localStorage.getItem('loginInfo'))
{
    playerNameEl.textContent = JSON.parse(localStorage.getItem('loginInfo')).username;
}
else
{
    alert("Login first to continue");
    window.location.href = "index.html";
}

function displayChampion()
{
    console.log("Accessed displayChampion()");
}

function insertAatrox()
{
    const el = document.querySelector('.champDisplay');

    if (el.hasChildNodes() == false)
    {
        const childLink = document.createElement('img');
        childLink.setAttribute("src", "https://images.contentstack.io/v3/assets/blt93c07aad6c2c008a/blt33d46538ece15313/63ea6e4a6cca5b715b76e384/Aatrox_0.jpg");
        childLink.setAttribute("width", "80px");
        childLink.setAttribute("name", "Aatrox");
        el.appendChild(childLink);
    }
    
}

function getChamp(champName)
{
    let linkName = "";
    if (champName == 'Aatrox')
    {
        linkName = 'https://images.contentstack.io/v3/assets/blt93c07aad6c2c008a/blt33d46538ece15313/63ea6e4a6cca5b715b76e384/Aatrox_0.jpg';
    }
    if (champName == 'Darius')
    {
        linkName = 'https://www.mobafire.com/images/champion/square/darius.png';
    }
    if (champName == 'Garen')
    {
        linkName = 'https://www.mobafire.com/images/avatars/garen-classic.png';
    }
    if (champName == 'Ekko')
    {
        linkName = 'https://www.mobafire.com/images/avatars/ekko-classic.png';
    }
    if (champName == 'Jarvan')
    {
        linkName = 'https://www.mobafire.com/images/champion/square/jarvan-iv.png';
    }
    if (champName == 'Warwick')
    {
        linkName = 'https://www.mobafire.com/images/champion/square/warwick.png';
    }
    if (champName == 'Ahri')
    {
        linkName = 'https://www.mobafire.com/images/avatars/ahri-classic.png';
    }
    if (champName == 'Lux')
    {
        linkName = 'https://www.mobafire.com/images/champion/icon/lux-120x.png';
    }
    if (champName == 'Zed')
    {
        linkName = 'https://www.mobafire.com/images/champion/icon/zed-120x.png';
    }
    if (champName == 'Ashe')
    {
        linkName = 'https://www.mobafire.com/images/avatars/ashe-classic.png';
    }
    if (champName == 'Caitlyn')
    {
        linkName = 'https://www.mobafire.com/images/champion/icon/caitlyn.png';
    }
    if (champName == 'Ezreal')
    {
        linkName = 'https://www.mobafire.com/images/avatars/ezreal-classic.png';
    }
    if (champName == 'Alistar')
    {
        linkName = 'https://www.mobafire.com/images/champion/square/alistar.png';
    }
    if (champName == 'Janna')
    {
        linkName = 'https://www.mobafire.com/images/avatars/janna-classic.png';
    }
    if (champName == 'Soraka')
    {
        linkName = 'https://www.mobafire.com/images/avatars/soraka-classic.png';
    }
    return linkName;
}

function insertChampion(champID, champName)
{
    const el = document.querySelector(champID);

    if (el.hasChildNodes() == true)
    {
        el.removeChild(el.childNodes[0]);
    }
    const childLink = document.createElement('img');
    childLink.setAttribute("src", getChamp(champName));
    childLink.setAttribute("Width", "80px");
    childLink.setAttribute("name", champName);
    el.appendChild(childLink);
}

function insertChampDisplay(champClass, champName)
{

}