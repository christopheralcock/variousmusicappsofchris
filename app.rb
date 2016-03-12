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



  run! if app_file == $0
end
