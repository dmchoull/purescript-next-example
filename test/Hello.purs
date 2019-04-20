module Test.Main where

import Prelude
import Effect (Effect)
import Test.Unit (test)
import Test.Unit.Main (runTest)
import Test.Unit.Assert as Assert

import Hello (greeting)

main :: Effect Unit
main = runTest do
  test "greets using the name given" do
    Assert.equal "Hello from PureScript, Test!" (greeting "Test")
