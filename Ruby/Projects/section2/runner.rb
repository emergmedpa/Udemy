require 'pp' #pretty print - styles output better
require_relative 'user' #use the User class I built in the same path and same folder

user = User.new 'patrick@example.com', 'Patrick'

pp user #pretty print output

user.save #calls function from user.rb
