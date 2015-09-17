require 'sinatra/base'
require 'sinatra/flash'



class SimplePiano < Sinatra::Base
  register Sinatra::Flash
  use Rack::MethodOverride

  get '/piano' do
    erb :piano
  end

  get '/' do
    erb :piano
  end

  get '/omnichord' do
    erb :omnichord
  end

  run! if app_file == $0
end
