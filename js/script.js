{
/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */
  const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
  
  /* remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
  }

/* add class 'active' to the clicked link */
console.log('clickedElement:', clickedElement);
clickedElement.classList.add ('active');
/* remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.post.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
  }

/* get 'href' attribute from the clicked link */
  const href=clickedElement.getAttribute ('href');

/* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle=document.querySelector (href);

/* add class 'active' to the correct article */
 targetArticle.classList.add ('active');
  }
  
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optTagsListSelector = '.tags.list';

function generateTitleLinks(customSelector=''){
console.log('funkcja zostala wykonana');
  /* remove contents of titleList */
     const titleList = document.querySelector(optTitleListSelector);
     titleList.innerHTML = ''
  /* for each article */
    const articles = document.querySelectorAll(optArticleSelector+customSelector);
    for(let article of articles){

    /* get the article id */
      const articleId=article.getAttribute('id')
    /* find the title element */
      const titleElement = article.querySelector (optTitleSelector);
    /* get the title from the title element */
      const articleTitle = titleElement.innerHTML
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    /* insert link into titleList */
    titleList.innerHTML = titleList.innerHTML + linkHTML;
    }
    const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();


function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
    for(let tag of activeLinks){
    /* remove class active */
      tag.classList.remove('active')
  /* END LOOP: for each active tag link */
    }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const links = document.querySelectorAll('a[href="'+href+'"]')
  /* START LOOP: for each found tag link */
    for(let tag of links){
    /* add class active */
      tag.classList.add('active');
  /* END LOOP: for each found tag link */
    }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="'+tag+'"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const links= document.querySelectorAll('a[href^="#tag-"]');
  /* START LOOP: for each link */
for (let link of links){
    /* add tagClickHandler as event listener for that link */
link.addEventListener("click",tagClickHandler);
  /* END LOOP: for each link */
}
}
function generateTags(){
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = ''
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute ('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      /* add generated code to html variable */
      html = linkHTML + html;
  /* [NEW] check if this link is NOT already in allTags */
        if(!allTags[tag]) {
  /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
        } else {
        allTags[tag]++;
}

    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
  /* END LOOP: for every article: */
    }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);

  /* [NEW] create variable for all links HTML code */
let allTagsHTML = '';

/* [NEW] START LOOP: for each tag in allTags: */
for(let tag in allTags){
  /* [NEW] generate code of a link and add it to allTagsHTML */
  allTagsHTML +='<li><a href="#tag-' + tag + '"><span>' + tag + ' ('+allTags[tag]+')</span></a></li>';
}
/* [NEW] END LOOP: for each tag in allTags: */

/*[NEW] add HTML from allTagsHTML to tagList */
tagList.innerHTML = allTagsHTML;
  }
  generateTags();
addClickListenersToTags();

}
