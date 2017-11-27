require './app'
require "sinatra/activerecord"

require 'sinatra/activerecord/rake'

namespace :db do
  task :load_config
end


begin
  require 'rspec/core/rake_task'
  RSpec::Core::RakeTask.new(:spec)
  task default: :spec
rescue LoadError
end
