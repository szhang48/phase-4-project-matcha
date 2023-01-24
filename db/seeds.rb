# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding bios"
Bio.create!([
    {
        name: 'John',
        location: 'Manhattan',
        description: '',
        school: 'NYU',
        occupation: 'Student',
        dating_preference: 'Female'
    },
    {
        name: 'Daniel',
        location: 'Boston',
        description: '',
        school: 'BU',
        occupation: 'Dentist',
        dating_preference: 'Female'
    },
    {
        name: 'Chester',
        location: 'Miami',
        description: '',
        school: 'FSU',
        occupation: 'Analyst',
        dating_preference: 'Female'
    },
    {
        name: 'Michelle',
        location: 'Manhattan',
        description: '',
        school: 'Colombia University',
        occupation: 'Consultant',
        dating_preference: 'Male'
    },
    {
        name: 'Amy',
        location: 'Los Angeles',
        description: '',
        school: 'SJSU',
        occupation: 'Student',
        dating_preference: 'Male'
    },
    {
        name: 'Jennifer',
        location: 'Seattle',
        description: '',
        school: 'Washington University',
        occupation: 'Student',
        dating_preference: 'Male'
    }
    
]) 

puts "Seeding users"

User.create!([
    {
        like: 0 ,
        match: 0
    },
    {
        like: 3 ,
        match: 2
    },
    {
        like: 1 ,
        match: 1
    },
    {
        like: 4 ,
        match: 2
    },
    {
        like: 2 ,
        match: 1
    },
    {
        like: 0 ,
        match: 0
    }
])

puts "Seeding posts"

Post.create([
    {
        title: '',
        description: '',
        picture: '',
        like: 6
    },
    {
        title: '',
        description: '',
        picture: '',
        like: 5
    },
    {
        title: '',
        description: '',
        picture: '',
        like: 9
    },
    {
        title: '',
        description: '',
        picture: '',
        like: 4
    },
    {
        title: '',
        description: '',
        picture: '',
        like: 11
    }
])

puts 'Done planting'