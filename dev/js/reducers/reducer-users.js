
//this reducer is a collection of data that will return an array of users
//to be combine to a big piece of objects
export default function(){
    return[
        { id:1,
            firstName: 'Vlad',
            lastName:'Chris',
            age: 89,
            description:'Lovely man - no trouble',
            thumbnail: 'http://localhost/photos/204.jpg'

        },
        {
            id:2,
            firstName: 'Jlovs',
            lastName:'Forever Like',
            age: 90,
            description:'My super woman',
            thumbnail: 'http://localhost/photos/morePicts/21.jpg'


        },
        {
            id:3,
            firstName: 'LoVio',
            lastName:'Mia',
            age: 91,
            description:'Family love',
            thumbnail: 'http://localhost/photos/morePicts/22.jpg'


        }
    ]

    //this array need to be combined within one big Object
    //next, stay in the current folder to create a new file named index
    //where to combine all reducers
}