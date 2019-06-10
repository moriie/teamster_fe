class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(username: u_params[:username])
    if @user && @user.authenticate(u_params[:password]) 
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def destroy
    # session[:user_id] = nil
  end

  private

  def u_params
      params.require(:user).permit(:username, :password)
  end

end
