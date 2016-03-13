require 'sinatra/base'
require 'sinatra/flash'



class SimplePiano < Sinatra::Base
  register Sinatra::Flash
  use Rack::MethodOverride
  # set :public, Proc.new { File.join(root, "app/public") }


  get '/piano' do
    erb :piano
  end

  get '/' do
    erb :piano
  end

  get '/omnichord' do
    erb :omnichord
  end

  get '/car' do
    erb :car
  end

  get '/recog' do
    erb :recog
  end

  get '/symph' do
    @ruby_pitch = [-15, -11, -8, -3, 1, 5, 9].sample
    @ruby_length = [10000, 10100, 10200, 10300, 10400].sample
    erb :symphony
  end

  get '/sym2' do
    notes = [0,0,4,4,7]
    octaving = [-24,-24,-12,-12,-12,0,0,0,0,0,12,12]
    @notes = [(notes.sample + octaving.sample), (notes.sample + octaving.sample), (notes.sample + octaving.sample)]
    @noteLength = [0.5, 0.33, 1, 0.66, 0.11, 2, 3, 5, 0.75].sample
    @wave = ["sine"].sample
    @repeatLength = [3,4,5,5,5.5,6,7,7.5,7.5,8,9,10,11,12,13,14,15,16].sample
    erb :sym2
  end

  get '/panning' do
    erb :panning
  end


  run! if app_file == $0
end
