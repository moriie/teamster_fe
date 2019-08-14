class GoalsController < ApplicationController

    skip_before_action :authorized, only: [:index]

    def index
        render json: Goal.all 
    end

    def create
        @goal = Goal.create(g_params)
        if @goal.valid?
            render json: { goal: @goal }, status: :created
        else
            render json: {error: 'Unacceptable parameters'}, status: :not_acceptable
        end
    end

    def update
        @goal = Goal.find(params[:id])
        if @goal.update(g_params)
            render json: {success: 'Goal successfully updated'}, status: :ok
        else
            render json: {error: 'Unacceptable parameters'}, status: :not_acceptable
        end
    end

    def destroy
        @goal = Goal.find(params[:id])
        if @goal.destroy
            render json: {success: 'Goal successfully deleted'}, status: :ok
        else
            render json: {error: 'Something went wrong...please try again.'}, status: :bad_request
        end
    end
    
    private

    def g_params
        params.require(:goal).permit(:description, :repeatable, :time_basis, :user_id, :end_date)
    end
end
