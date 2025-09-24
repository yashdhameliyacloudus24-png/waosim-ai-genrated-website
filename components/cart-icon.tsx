"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

export function CartIcon() {
  const { state, dispatch } = useCart()

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" })
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleCart} className="relative bg-transparent">
      <ShoppingBag className="h-4 w-4" />
      {itemCount > 0 && (
        <Badge
          variant="destructive"
          className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
        >
          {itemCount > 99 ? "99+" : itemCount}
        </Badge>
      )}
    </Button>
  )
}
