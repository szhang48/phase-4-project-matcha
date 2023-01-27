Rails.application.routes.draw do

  resources :posts, only: [:index, :create, :update, :destroy]
  resources :users, only: [:index, :create, :show ]

  resources :bios, only: [:index, :show, :create ]
  get '/authorize', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  patch '/users/:id/profile_photo', to: 'users#profile_photo'
  patch '/users/:id/cover_photo', to: 'users#cover_photo'
end
