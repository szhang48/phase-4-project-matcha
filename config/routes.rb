Rails.application.routes.draw do
   resources :posts, only: [:index,:create]
  resources :users, only: [:index,:create ]
  resources :bios, only: [:index, :show, :create ]
  post '/login', to: 'users#login'

end
