class UsersController < ApplicationController

    def create
        @user = User.create(u_params)
    end

    def update
    end

    def destroy
    end

    private

    def u_params(*args)
        params.require(:user).permit(args)
    end
end
