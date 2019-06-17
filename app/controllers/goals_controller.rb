class GoalsController < ApplicationController

    def create
        @goal = Goal.create(g_params)
        if @goal.valid?
            render json: { goal: @goal }, status: :created
        else
            render json: {error: 'Unacceptable parameters'}, status: :not_acceptable
        end
    end

    private

    def g_params
        params.require(:goal).permit(:description, :repeatable, :time_basis, :user_id)
    end
end
