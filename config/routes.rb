Rails.application.routes.draw do

  resources :twitterings
  resources :users
  get   '/login', :to => 'sessions#new', :as => :login
  match '/auth/:provider/callback', :to => 'sessions#create', via: 'get'
  match '/auth/failure', :to => 'sessions#failure', via: 'get'
  match "/twitter/signup" => redirect("https://twitter.com/signup?lang=en"), :as => :twitter, via: 'get'
  get '/tweets' => 'twitterings#show'
  get '/tweets/likes' => 'twitterings#likes'
  get '/:param1(/:param2)(/:param3)' => 'application#static'




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
