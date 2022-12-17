let posts=[
    {title:'post one', body:'this is post one'},
    {title:'post two', body: 'this is post two'}
];
// let intervalId = 0;

function getPost(){
    // clearInterval(intervalId);
    // intervalId=setInterval(()=>{
        let output='';
        for(let i=0;i<posts.length;i++){

            output+= `<li>${posts[i].title}</li>`;
        }

        document.body.innerHTML = output;

    

    // let output='';

    // for(let i=0;i<posts.length;i++){
    //     output+= `<li>${posts[i].title}- last updated ${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago</li>`;

    //     }
    //     document.body.innerHTML = output;

}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.push(post);

        const error =false;
        if(!error){
            resolve();

        }else{
            reject('Error:Something went wrong');
        }
        },1000);

    })
    

}
// createPost({title:'post three',body:'this is post three'})
//  .then(getPost);

//  function deletepost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             if(posts.length>0){
//                 const lastelement=posts.pop();
//                 resolve(lastelement);
//             }
//             else{
//                 reject('array is empty now');
//             }
//         },1000);

//     })
// }
// createPost({title:'post four',body:'this is post four'})
//  .then(()=>{
//     getPost()
//     deletepost().then(()=>{
//         getPost()
//         deletepost().then(()=>{
//             getPost()
//             deletepost().then(()=>{
//                 getPost()
//                 deletepost().then(()=>{
//                 getPost()
//                 deletepost().then(()=>{})
//                 .catch((error)=>{
//                     console.log('inside catch block',error)

//                 })
//             })
//         })
//     })
// })
 



//  })
//  .catch(error=>console.log(error));

// promise.all

const promise1= Promise.resolve('hello world');
const promise2=1000;
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,'Goodbye')

);
Promise.all([promise1,promise2,promise2]).then(values => console.log(values));


