const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`);
var obj = [];

const savList = 'save lists';
const savListobj = [];



function addEntryToDom(event) {
        event.preventDefault();
        const d = new Date();
        const month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        const n = month[d.getMonth()];
        const day = d.getDay();
        const year = d.getFullYear();


        
        // Adding Div
        const entryDiv = document.createElement(`div`);
        entryDiv.className = `single-entry-div`;
        entryResultRow.appendChild(entryDiv);

        // 작성자
        const entryHeading = document.createElement(`h3`);
        entryHeading.className = `single-entry-heading`;
        entryHeading.textContent = getEntryTitle[0].value;
        entryDiv.appendChild(entryHeading);

        // 날짜

        const entryDate = document.createElement(`p`);
        entryDate.className = `single-entry-date`;
        // eslint-disable-next-line no-cond-assign
        if ((getEntryTitle[0].value = getEntryTitle[0].value)) {
                entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
                entryDiv.appendChild(entryDate);
        }

        // 내용

        const entryParagraph = document.createElement(`p`);
        entryParagraph.className = `single-entry-text`;
        entryParagraph.textContent = getEntryText[0].value;
        entryDiv.appendChild(entryParagraph);
        getEntryText[0].value = ``;
        
        
        obj = ({'writer': getEntryTitle[0].value, 'when': entryDate.textContent, 'txt': entryParagraph.textContent});
        saved(obj);
        

        }

 function saved(record){


const title = record['writer'];
const content = record['txt'];
const when = record['when']; 
const lists = JSON.parse(localStorage.getItem(savList));
if (!lists) {
const objArr = [];
objArr.push({
when: record['when'],
writer: record['writer'],
txt: record['txt']
});
 
localStorage.setItem(savList, JSON.stringify(objArr));
} else {
lists.push({
  when: record['when'],
  writer: record['writer'],
  txt: record['txt']
});
 
localStorage.setItem(savList, JSON.stringify(lists));
}
   
}   
 

 function load(){
  
    const lists = JSON.parse(localStorage.getItem(savList));
    console.log(lists);
    lists.forEach((list, index) =>{
    if(lists === null){

    }
    else{

        const d = new Date();
        const month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        const n = month[d.getMonth()];
        const day = d.getDay();
        const year = d.getFullYear();


       

        // Adding Div
        const entryDiv = document.createElement(`div`);
        entryDiv.className = `single-entry-div`;
        entryResultRow.appendChild(entryDiv);

        // 작성자
        const entryHeading = document.createElement(`h3`);
        entryHeading.className = `single-entry-heading`;
        entryHeading.textContent = list['writer'];
        entryDiv.appendChild(entryHeading);

        // 날짜

        const entryDate = document.createElement(`p`);
        entryDate.className = `single-entry-date`;
        // eslint-disable-next-line no-cond-assign
        
        entryDate.textContent = list['when'];
        entryDiv.appendChild(entryDate);
        

        // 내용

        const entryParagraph = document.createElement(`p`);
        entryParagraph.className = `single-entry-text`;
        entryParagraph.textContent = list['txt'];
        entryDiv.appendChild(entryParagraph);
        list['txt'] = ``;
      }
      console.log('online');
    
    
 })
}

        
function init(){
  load();
}
entryForm.addEventListener(`submit`, addEntryToDom);
init();