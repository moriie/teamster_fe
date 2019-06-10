Rails.application.routes.draw do
  
  resources :sessions, only: [:new, :create, :destroy]
  resources :users
  # , only: [:create, :update, :destroy]

  post 'signup', to: 'users#create', as: 'signup'
  post 'login', to: 'sessions#create', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
