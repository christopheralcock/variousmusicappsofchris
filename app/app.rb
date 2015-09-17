require 'sinatra/base'
require 'sinatra/flash'



class SimplePiano < Sinatra::Base
  register Sinatra::Flash
  use Rack::MethodOverride

  get '/' do
    erb :piano
  end

  run! if app_file == $0
end
