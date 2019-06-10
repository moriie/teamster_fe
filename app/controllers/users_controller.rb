class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]

    def profile
        render json: { user: current_user }, status: :accepted
    end

    def create
        @user = User.create(u_params)
        if @user.valid?
            @token = encode_token({ user_id: @user.id })
            render json: { user: @user, jwt: @token }, status: :created
        else
            render json: {error: 'Unacceptable parameters'}, status: :not_acceptable
        end
    end

    def update
    end

    def destroy
    end

    private

    def u_params
        params.require(:user).permit(:username, :password, :age, :location, :email)
    end
end
