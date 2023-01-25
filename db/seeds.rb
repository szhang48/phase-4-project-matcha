# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



Bio.destroy_all
Post.destroy_all
User.destroy_all





puts "Seeding bios"
b1 = Bio.create(name: 'John', location: 'Manhattan', description: 'hi', school: 'NYU', occupation: 'Student', dating_preference: 'Female')
b2 = Bio.create(name: 'Chester', location: 'Miami', description: 'hi', school: 'FSU', occupation: 'Analyst', dating_preference: 'Female')
b3 = Bio.create(name: 'Daniel', location: 'Boston', description: 'hi', school: 'BU', occupation: 'Dentist', dating_preference: 'Female')
b4 = Bio.create(name: 'Michelle', location: 'Manhattan', description: 'hi', school: 'Colombia University', occupation: 'Consultant', dating_preference: 'Male')
b5 = Bio.create(name: 'Amy', location: 'Los Angeles', description: 'hi', school: 'SJSU', occupation: 'Student', dating_preference: 'Male')
b6 = Bio.create(name: 'Jennifer', location: 'Seattle', description: 'hi', school: 'Washington State University', occupation: 'Student', dating_preference: 'Male')


puts "Seeding posts"

p1 = Post.create(name: 'hi', content:'hi', picture: 'hi')
p2 = Post.create(name: 'hi', content:'hi', picture: 'hi')
p3 = Post.create(name: 'hi', content:'hi', picture: 'hi')
p4 = Post.create(name: 'hi', content:'hi', picture: 'hi')
p5 = Post.create(name: 'hi', content:'hi', picture: 'hi')
p6 = Post.create(name: 'hi', content:'hi', picture: 'hi')

puts "Seeding Likes"

puts "Seeding users"

User.create(name: "Sandy", email: "abc@gmail.com", password: "123", post_id: p1.id, bio_id: b1.id)
User.create(name: "Sam", email: "abc@gmail.com", password: "1234", post_id: p2.id, bio_id: b2.id)
User.create(name: "Kamran", email: "abc@gmail.com", password: "1235", post_id: p3.id, bio_id: b3.id)
User.create(name: "Bob", email: "abc@gmail.com", password: "1236", post_id: p4.id, bio_id: b4.id)
User.create(name: "Rob", email: "abc@gmail.com", password: "1237", post_id: p5.id, bio_id: b5.id)
User.create(name: "Sob", email: "abc@gmail.com", password: "1238", post_id: p6.id, bio_id: b6.id)
puts 'Done planting'




#         name: 'Michelle',
#         location: 'Manhattan',
#         description: 'hi',
#         school: 'Colombia University',
#         occupation: 'Consultant',
#         dating_preference: 'Male'

