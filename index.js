//replace(/(_.)?\.png$/,)

//변경할 헤더의 배경색상 가져오기
const header = document.querySelector('header')
const headerText = document.querySelector('header h1')
const headerStyle = getComputedStyle(header)
const headerTextStyle = getComputedStyle(headerText)
const headerBg = headerStyle.backgroundColor
const headerTextColor = headerTextStyle.color
//사라지게할 헤더의 overview가져오기
const overView = document.querySelector('.overview')
//



//각 section의 y값 구하기위해 sections전체를 가져온다.
const sections = document.querySelectorAll('section')
//브라우저에서 스크롤을 할때 이벤트를 추가한다.
window.addEventListener('scroll', ()=>{    
    //현재시점의 스크롤 y값 구하기
    const currentY = this.scrollY
    //for of문을 사용하여 각 section의 높이 구하기
    for(const [i, section] of sections.entries()){
        const sectionY = section.offsetTop
        const next = section
        //스크롤이 첫번째 section을 넘어가면 overview가 서서히 사라짐
        if(currentY>=sectionY){
            if(i===1){
                overView.style.opacity = 0;
            }
        }else if(currentY<=sectionY){
            if(i===1){
                overView.style.opacity = 1;
            }
        }
    }
})

