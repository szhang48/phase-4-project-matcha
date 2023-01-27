Rails.application.routes.draw do
  resources :posts, only: [:index, :create, :update, :destroy]
  resources :users, only: [:index, :create, :users ]
  resources :bios, only: [:index, :show, :create ]
  get '/authorize', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get 'posts/:id', to: 'posts#show'

end
