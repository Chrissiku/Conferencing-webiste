// Dropdown menu on mobile variables
const menubtn = document.querySelector('.menu-icon');
const mainMenu = document.querySelector('.navbar');

// Dynamic speakers variables
const speakersSection = document.querySelector('#speakers_card_list');
const speakersList = [
  {
    speaker_name: 'Rostova Muller',
    speaker_image:
      'https://media.istockphoto.com/photos/pretty-young-business-woman-giving-a-presentation-picture-id493711407?b=1&k=20&m=493711407&s=170667a&w=0&h=Y6NLFWnZLJQBp7NHyaTVeTn2eCHpKHt6kvk9SH0rGog=',
    speaker_bio:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, deserunt enim.',
    speaker_role:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, deserunt enim.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, deserunt enim.',
  },

  {
    speaker_name: 'Mr. Charles Bobby',
    speaker_image:
      'https://media.istockphoto.com/photos/speaker-giving-talk-at-business-conference-picture-id639982912?b=1&k=20&m=639982912&s=170667a&w=0&h=fSYOqpt-dSZOz-_y8i_cOVrZmXFuk_jWg99Am4VEXgI=',
    speaker_bio:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, deserunt enim.',
    speaker_role:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, deserunt enim.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, deserunt enim.',
  },

  {
    speaker_name: 'Katia Vingdice',
    speaker_image:
      'https://media.istockphoto.com/photos/businesswoman-standing-at-podium-picture-id1286013189?b=1&k=20&m=1286013189&s=170667a&w=0&h=lIK2R1hMjkpstZKDQHe6hySU39-8u1twlASi62ivQqI=',
    speaker_bio:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, deserunt enim.',
    speaker_role:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, deserunt enim.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, deserunt enim.',
  },
  {
    speaker_name: 'Christabella Cicada',
    speaker_image:
      'https://media.istockphoto.com/photos/horizontal-of-close-up-photo-amazing-beautiful-darkskinned-lady-draws-picture-id1318769938?b=1&k=20&m=1318769938&s=170667a&w=0&h=l8nE6hmMXP06yV6Qgu2QrqF45qK-U1jRvIAhgwEfMYs=',
    speaker_bio:
      'Ir. Christabella Cicada at University on Musanza and That ipsum dolor sit amet Lorem ipsum dolor sit.',
    speaker_role:
      "Present and explains deeply the inportance of a solide Web development network and what is it's place in the real new world",
  },
  {
    speaker_name: 'Dr. Luis Antonation',
    speaker_image:
      'https://media.istockphoto.com/photos/businessman-in-suit-looking-at-camera-making-conference-video-call-picture-id1129638598?b=1&k=20&m=1129638598&s=170667a&w=0&h=6TvussWENybnIanhBtaO2nBaxvARCUqkfwWKs5cnOPo=',
    speaker_bio:
      ' Dr. Luis Antonation at University on Goma and Lorem ipsum dolor sit amet Lorem ipsum dolor sit.',
    speaker_role:
      "Present and explains deeply the inportance of a solide neural network and what is it's place in the real new world",
  },
];

// Function to load speakers cards to the speakers section
function speakerCard() {
  // Dynamicaly fectch speakers into the speakers section
  for (let i = 0; i < speakersList.length; i += 1) {
    const fetchSpeakers = speakersSection.innerHTML;
    speakersSection.innerHTML = `<div class="speaker-card">
      <div class="images">
        <img
          src="${speakersList[i].speaker_image}"
          alt="Speaker image"
          width="200"
        />
      </div>
      <div class="bio">
        <h3>${speakersList[i].speaker_name}</h3>
        <p class="speaker-bio">
        ${speakersList[i].speaker_bio}
        </p>
        <div class="line"></div>
        <p class="speaker-curriculum">
        ${speakersList[i].speaker_role}
        </p>
      </div>
    </div>
    ${fetchSpeakers}`;
  }
}

// function Toogle menu
function toogleMenu() {
  menubtn.addEventListener('click', () => {
    if (menubtn.firstElementChild.classList.contains('fa-bars')) {
      menubtn.firstElementChild.classList.replace('fa-bars', 'fa-times');
      menubtn.firstElementChild.style.color = '#fff';
      mainMenu.style.display = 'block';
    } else {
      mainMenu.style.display = 'none';
      menubtn.firstElementChild.classList.replace('fa-times', 'fa-bars');
      menubtn.firstElementChild.style.color = '#272a31';
    }
  });
}

// functions invocation
toogleMenu();
speakerCard();
