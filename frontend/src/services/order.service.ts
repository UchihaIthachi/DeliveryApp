import axios from "axios";
import authHeader from "./auth-header";
import { BASE_API_URL } from "../config/apiConfig";
import { handleError } from "../utils/errorHandler";

const API_URL = `${BASE_API_URL}/order`;

export interface CustomerOrderDto {
  orderId?: string;
  restaurantId: string;
  customerLocation: number[];
  customerName: string;
  customerAddress: string;
  customerPhone: string;
}

class OrderService {
  private handleError: (error: unknown) => Promise<void>;

  constructor() {
    this.handleError = handleError;
  }

  // Create a new order
  async createOrder(orderData: CustomerOrderDto): Promise<string> {
    try {
      const response = await axios.post<string>(API_URL, orderData, {
        headers: {
          "Content-Type": "application/json",
          ...authHeader(),
        },
      });
      console.log("Order created successfully:", response.data);
      return response.data;
    } catch (error) {
      await this.handleError(error);
      throw error;
    }
  }

  // Accept an order
  async acceptOrder(orderId: string): Promise<string> {
    try {
      const response = await axios.post<string>(
        `${API_URL}/accept/${orderId}`,
        {},
        {
          headers: authHeader(),
        }
      );
      return response.data;
    } catch (error) {
      await this.handleError(error);
      throw error;
    }
  }

  // Request riders for an order
  async requestRiders(orderId: string): Promise<string> {
    try {
      const response = await axios.post<string>(
        `${API_URL}/request-riders/${orderId}`,
        {},
        {
          headers: authHeader(),
        }
      );
      return response.data;
    } catch (error) {
      await this.handleError(error);
      throw error;
    }
  }

  // Mark order as "on the way"
  async markOrderOnTheWay(orderId: string): Promise<string> {
    try {
      const response = await axios.post<string>(
        `${API_URL}/on-the-way/${orderId}`,
        {},
        {
          headers: authHeader(),
        }
      );
      return response.data;
    } catch (error) {
      await this.handleError(error);
      throw error;
    }
  }

  // Mark order as delivered
  async markOrderDelivered(orderId: string): Promise<string> {
    try {
      const response = await axios.post<string>(
        `${API_URL}/delivered/${orderId}`,
        {},
        {
          headers: authHeader(),
        }
      );
      return response.data;
    } catch (error) {
      await this.handleError(error);
      throw error;
    }
  }

  // Cancel an order
  async cancelOrder(orderId: string): Promise<string> {
    try {
      const response = await axios.post<string>(
        `${API_URL}/cancel/${orderId}`,
        {},
        {
          headers: authHeader(),
        }
      );
      return response.data;
    } catch (error) {
      await this.handleError(error);
      throw error;
    }
  }
}

export default new OrderService();