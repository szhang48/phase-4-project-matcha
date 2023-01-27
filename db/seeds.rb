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

profile_photo_img = "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"
cover_photo_img = "https://d2x3xhvgiqkx42.cloudfront.net/43cf6303-25b8-4c1e-9942-cb14f8fe611e/caa7233a-a6bf-4482-93a9-62ae52b515cc/2020/06/18/61cf6bfa-3e00-4ebf-ab37-0712958ec0ef/b4ffc494-e590-4d31-9b39-5aa9b3d98312.png"



puts "Seeding bios"
b1 = Bio.create(name: 'John', location: 'Manhattan', description: 'hi', school: 'NYU', occupation: 'Student', dating_preference: 'Female')
b2 = Bio.create(name: 'Chester', location: 'Miami', description: 'hi', school: 'FSU', occupation: 'Analyst', dating_preference: 'Female')
b3 = Bio.create(name: 'Daniel', location: 'Boston', description: 'hi', school: 'BU', occupation: 'Dentist', dating_preference: 'Female')
b4 = Bio.create(name: 'Michelle', location: 'Manhattan', description: 'hi', school: 'Colombia University', occupation: 'Consultant', dating_preference: 'Male')
b5 = Bio.create(name: 'Amy', location: 'Los Angeles', description: 'hi', school: 'SJSU', occupation: 'Student', dating_preference: 'Male')
b6 = Bio.create(name: 'Jennifer', location: 'Seattle', description: 'hi', school: 'Washington State University', occupation: 'Student', dating_preference: 'Male')


puts "Seeding posts"

p1 = Post.create(name: 'Bob', content:'I am Bob. Here is my favorite picture.', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg')
p2 = Post.create(name: 'Sob', content:'I am Sob. I do not have a picture today.', picture: nil)
p3 = Post.create(name: 'Mob', content:'I am Mob. I am a gangster. Here is a photo of my gang', picture: 'https://images.prismic.io/findmypast-titan/4cba48e4-8158-4c51-86ae-57089693ba61_real-peaky-blinders.jpg?auto=compress,format&rect=0,4,1182,566&w=1200&h=575')
p4 = Post.create(name: 'Tob', content:'I am Tob. I am just Tob.', picture: 'http://static1.squarespace.com/static/5e42407b82936e5f26597c5e/t/5e42513dc2260c75ea31e80d/1581404480846/Screen+Shot+2020-02-10+at+11.00.50+PM.png?format=1500w')
p5 = Post.create(name: 'Lob', content:'I am Lob. Here is a picture of a Lob.', picture: 'https://pbs.twimg.com/media/Dzp32CaVYAA9M51?format=jpg&name=large')
p6 = Post.create(name: 'Wob', content:'I am Wob. I Wob corn.', picture: 'https://hips.hearstapps.com/hmg-prod/images/is-corn-grain-1544222258.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*')

puts "Seeding users"

User.create(name: "Sandy", email: "abc@gmail.com", password: "123", profile_photo: "https://d2x3xhvgiqkx42.cloudfront.net/43cf6303-25b8-4c1e-9942-cb14f8fe611e/caa7233a-a6bf-4482-93a9-62ae52b515cc/2020/06/18/61cf6bfa-3e00-4ebf-ab37-0712958ec0ef/b4ffc494-e590-4d31-9b39-5aa9b3d98312.png", cover_photo: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max", post_id: p1.id, bio_id: b1.id)
User.create(name: "Sam", email: "abc@gmail.com", password: "1234", profile_photo: "https://d2x3xhvgiqkx42.cloudfront.net/43cf6303-25b8-4c1e-9942-cb14f8fe611e/caa7233a-a6bf-4482-93a9-62ae52b515cc/2020/06/18/61cf6bfa-3e00-4ebf-ab37-0712958ec0ef/b4ffc494-e590-4d31-9b39-5aa9b3d98312.png", cover_photo: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max", post_id: p2.id, bio_id: b2.id)
User.create(name: "Kamran", email: "abc@gmail.com", password: "1235", profile_photo: "https://d2x3xhvgiqkx42.cloudfront.net/43cf6303-25b8-4c1e-9942-cb14f8fe611e/caa7233a-a6bf-4482-93a9-62ae52b515cc/2020/06/18/61cf6bfa-3e00-4ebf-ab37-0712958ec0ef/b4ffc494-e590-4d31-9b39-5aa9b3d98312.png", cover_photo: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max", post_id: p3.id, bio_id: b3.id)
User.create(name: "Bob", email: "abc@gmail.com", password: "1236", profile_photo: "https://d2x3xhvgiqkx42.cloudfront.net/43cf6303-25b8-4c1e-9942-cb14f8fe611e/caa7233a-a6bf-4482-93a9-62ae52b515cc/2020/06/18/61cf6bfa-3e00-4ebf-ab37-0712958ec0ef/b4ffc494-e590-4d31-9b39-5aa9b3d98312.png", cover_photo: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max", post_id: p4.id, bio_id: b4.id)
User.create(name: "Rob", email: "abc@gmail.com", password: "1237", profile_photo: "https://d2x3xhvgiqkx42.cloudfront.net/43cf6303-25b8-4c1e-9942-cb14f8fe611e/caa7233a-a6bf-4482-93a9-62ae52b515cc/2020/06/18/61cf6bfa-3e00-4ebf-ab37-0712958ec0ef/b4ffc494-e590-4d31-9b39-5aa9b3d98312.png", cover_photo: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max", post_id: p5.id, bio_id: b5.id)
User.create(name: "Sob", email: "abc@gmail.com", password: "1238", profile_photo: "https://d2x3xhvgiqkx42.cloudfront.net/43cf6303-25b8-4c1e-9942-cb14f8fe611e/caa7233a-a6bf-4482-93a9-62ae52b515cc/2020/06/18/61cf6bfa-3e00-4ebf-ab37-0712958ec0ef/b4ffc494-e590-4d31-9b39-5aa9b3d98312.png", cover_photo: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max", post_id: p6.id, bio_id: b6.id)
puts 'Done planting'
