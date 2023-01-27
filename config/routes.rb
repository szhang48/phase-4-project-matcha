Rails.application.routes.draw do
  resources :posts, only: [:index,:create]
  resources :users, only: [:index,:create ]
  resources :bios, only: [:index, :show, :create ]
  get '/authorize', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get 'posts/:id', to: 'posts#show'

end
