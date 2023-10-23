export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      product_categories: {
        Row: {
          icon_id: string
          product_category_id: string
          product_category_name: string
        }
        Insert: {
          icon_id: string
          product_category_id: string
          product_category_name: string
        }
        Update: {
          icon_id?: string
          product_category_id?: string
          product_category_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
