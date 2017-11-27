require "sinatra"
require "net/http"
require 'active_record'
require "sinatra/reloader"
require "sinatra/activerecord"
require "sinatra/json"
require "json"
require 'pry'


set :bind, '0.0.0.0'

set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

# Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
#   require file
#   also_reload file
# end
DARK_SKY_API_KEY = "7f1e494905f2e9dadb9002a84f2c8f18"
get "/api/v1/forecast/:latitude,:longitude" do |latitude, longitude|
  uri = URI("https://api.darksky.net/forecast/#{DARK_SKY_API_KEY}/#{latitude},#{longitude}")
  return Net::HTTP.get(uri)
end

get "/api/v1/googlemap" do
  uri = URI("https://maps.googleapis.com/maps/api/js?key=AIzaSyDIdilEOk_CsFuM5xULsgYsJoc-jnQhjmc&callback=initMap")
  return Net::HTTP.get(uri)
end

get "/api/v1/googlemap/places" do
  uri = URI("https://maps.googleapis.com/maps/api/js?key=AIzaSyDIdilEOk_CsFuM5xULsgYsJoc-jnQhjmc&libraries=places")
  return Net::HTTP.get(uri)
end




get '/' do
  erb :home
end

get '/form' do
  erb :home
end

get '/host' do
  erb :home
end

post '/host' do
  @name = params["name"]
  @email = params["email"]
  @type = params["type"]
  @address = params["address"]

  new_host = Host.create(name: @name, email: @email, type: @type, address: @address)
  erb :home
end

get '/saved_places' do
  erb :home
end

get '/trips' do
  erb :home
end

get '/messages' do
  erb :home
end

get '/help' do
  erb :home
end
