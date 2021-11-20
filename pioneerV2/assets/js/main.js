const sessionPlaceholder = document.querySelector('#session'),
closeBannerButton = document.querySelector('.close-banner');
let tabs = document.querySelectorAll('[data-target]');
let tabContents = document.querySelectorAll('[data-tab-content]'),
coursePage = document.querySelector('#course-page'),
navigationHolder = document.querySelector('.navigation');
sessionPlaceholder.innerText = `${new Date().getFullYear()}-${new Date().getFullYear()+1}`;

closeBannerButton.addEventListener('click', function() {
    document.querySelector('header').removeChild(closeBannerButton.parentElement);
})

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
})
// eng, med, pre-found, Achievers program

console.log(document.querySelectorAll('.nav-link').length)

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
})


if(coursePage)
{
    // get url encoded data

    let searchParams = new URLSearchParams(location.search),
    type = searchParams.get('type'),
    name = searchParams.get('name'),
    headerTitle = coursePage.querySelector('#header-title'),
    courseName = coursePage.querySelector("#course-name"),
    introTitle = coursePage.querySelector('#intro-title'),
    courseSpeciality = coursePage.querySelector('#course-speciality'),
    descriptions = Array.from(document.querySelectorAll('.desc')),
    successSteps = coursePage.querySelector('#success-steps');
    // search for match in json    
    fetch('data/data.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach((item, index) => {
            if(item.name === name && item.type === type)
            {               
                // render the data
                headerTitle.innerText = item.name;
                courseName.innerText = item.name;
                introTitle.innerText = `${item.name.split(' ')[0]} batch for ${type.split(' ')[0]} ${new Date().getFullYear()}-${new Date().getFullYear()+1}`
                courseSpeciality.innerText = item.description;

                descriptions[0].innerText = item.objecttive;

                item.course_content.forEach(content => {
                    descriptions[1].innerText += `${content}, `;
                });
                
                
                descriptions[2].innerText = item.eligibility;
                descriptions[3].innerText = item.duration;
                
                item.success_steps.forEach(step => {
                    successSteps.innerHTML += `<li>${step}</li>`
                })

            }
        })
        console.log(result)
    })
    .catch(err => console.error(err))
}
