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
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list'

function generateTitleLinks(){
console.log('funkcja zostala wykonana');
  /* remove contents of titleList */
     const titleList = document.querySelector(optTitleListSelector);
     titleList.innerHTML = ''
  /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
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
function generateTags(){
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */

  for(let article of articles){
    console.log('znaleziono wszystkie artykuly');

    /* find tags wrapper */

    const tagsWrapper = article.querySelector(optArticleTagsSelector);
     
    /* make html variable with empty string */

    let html = ''

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute ('data-tags');

    /* split tags into array */

    console.log (articleTags)
    const articleTagsArray = articleTags.split(' ');
    console.log (articleTagsArray);

    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log ('linki zostały wygenerowane!');

      /* add generated code to html variable */
      html = linkHTML + html;
    /* END LOOP: for each tag */

    }

    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;

  
  /* END LOOP: for every article: */
  }
}

generateTags();
}