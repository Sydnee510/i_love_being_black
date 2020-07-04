# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

one = Post.create(content: "I want police brutality to stop", state: "California", country: "US", likes: 3)
two = Post.create(content: "My husband was killed by law enforcement 3 years ago", state: "Georgia", country: "US", likes: 2)
three = Post.create(content: "MLK was a great leader for the black community", state: "California", country: "US", likes: 1)
four = Post.create(content: "Right now we all need to be close to our loved ones", state: "Georgia", country: "US", likes: 0)

red = Comment.create(text: "I felt this from the bottom of my heart", post: four)
blue = Comment.create(text: "We are all in this together", post: one)
yellow = Comment.create(text: "We need more modern day leaders like MLK!!", post: three)
green = Comment.create(text: "May you recieve blessings to your entire family.", post: two)


