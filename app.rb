require "sinatra"
require "net/http"
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
