const MyBio = _ => (JSON.stringify({
    name:"Arief Al-Kahfi Verdana",
    age:22,
    address:"Jl DR AK Gani No 104, Muara Enim",
    hobbies:["Coding","Biking","Reading"],
    is_married:false,
    list_school:[
        {
            name:"SD Negeri 11 Muara Enim",
            year_in:2004,
            year_out:2010,
            major:null
        },
        {
            name:"SMP Negeri 1 Muara Enim",
            year_in:2010,
            year_out:2013,
            major:null
        },
        {
            name:"SMA Negeri 1 Muara Enim",
            year_in:2013,
            year_out:2016,
            major:"IPA"
        },
        {
            name:"Politeknik Negeri Sriwijaya",
            year_in:2016,
            year_out:2019,
            major:"Computer Engineering"
        }
    ],
    skills:[
        {
            skill_name:"Web Development",
            level:"advanced"
        },
        {
            skill_name:"Android Programming",
            level:"beginner"
        }
    ],
    interest_in_coding:true
}))

console.log(MyBio())